// A small markdown renderer, enough for the wiki and no more: headings (with
// ids), paragraphs, lists (nested by indent), bold, italic, inline code, code
// blocks, links, images, blockquotes, rules, and pipe tables. Raw HTML lines
// (a line starting with "<") pass through untouched, which is how templates
// hand back infoboxes and generated tables. Written here rather than vendored,
// so the wiki has no dependencies at all.

export function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function slugify(s) {
  return String(s).toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Inline: code first (its contents are not formatted), then images, links, bold, italic.
export function inline(text) {
  const codes = [];
  let s = text.replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(escapeHtml(c)) - 1}\u0000`);
  const html = [];
  s = s.replace(/<[^>]+>/g, (tag) => `\u0001${html.push(tag) - 1}\u0001`); // inline HTML from templates kept as is
  s = escapeHtml(s);
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt, src) => `<img src="${src}" alt="${alt}">`);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, href) => `<a href="${href}">${t}</a>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^\w*])\*([^*\s][^*]*?)\*(?=[^\w*]|$)/g, "$1<em>$2</em>");
  s = s.replace(/\u0001(\d+)\u0001/g, (_, i) => html[+i]);
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[+i]}</code>`);
}

export function render(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  const headings = [];
  let i = 0;
  const isBlank = (l) => /^\s*$/.test(l);
  const isList = (l) => /^\s*([-*]|\d+\.)\s+/.test(l);
  const isTable = (l) => /^\s*\|.*\|\s*$/.test(l);
  const startsBlock = (l) => /^(#{1,6})\s/.test(l) || /^```/.test(l) || /^>\s?/.test(l) || /^(-{3,}|\*{3,})\s*$/.test(l) || isList(l) || isTable(l) || /^\s*</.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (isBlank(line)) { i++; continue; }
    let m;
    if ((m = /^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line))) {
      const level = m[1].length;
      const text = inline(m[2]);
      const id = slugify(m[2]);
      headings.push({ level, text, id });
      out.push(`<h${level} id="${id}">${text}</h${level}>`);
      i++;
    } else if (/^```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre><code>${escapeHtml(buf.join("\n"))}</code></pre>`);
    } else if (/^(-{3,}|\*{3,})\s*$/.test(line)) {
      out.push("<hr>");
      i++;
    } else if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ""));
      out.push(`<blockquote>${render(buf.join("\n")).html}</blockquote>`);
    } else if (/^\s*</.test(line)) {
      const buf = [];
      while (i < lines.length && !isBlank(lines[i])) buf.push(lines[i++]);
      out.push(buf.join("\n"));
    } else if (isTable(line)) {
      const rows = [];
      while (i < lines.length && isTable(lines[i])) rows.push(lines[i++]);
      const cells = (r) => r.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const sep = rows[1] && /^\s*\|?\s*:?-{2,}/.test(rows[1]);
      const head = sep ? cells(rows[0]) : null;
      const body = (sep ? rows.slice(2) : rows).map(cells);
      out.push(`<table class="wikitable">${head ? `<thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead>` : ""}<tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
    } else if (isList(line)) {
      const buf = [];
      while (i < lines.length && (isList(lines[i]) || (/^\s{2,}\S/.test(lines[i]) && !isBlank(lines[i])))) buf.push(lines[i++]);
      out.push(renderList(buf));
    } else {
      const buf = [];
      while (i < lines.length && !isBlank(lines[i]) && !startsBlock(lines[i])) buf.push(lines[i++]);
      if (!buf.length) buf.push(lines[i++]);
      out.push(`<p>${inline(buf.join(" "))}</p>`);
    }
  }
  return { html: out.join("\n"), headings };
}

function renderList(lines) {
  const indentOf = (l) => l.match(/^\s*/)[0].length;
  const base = indentOf(lines[0]);
  const ordered = /^\s*\d+\./.test(lines[0]);
  const items = [];
  for (const l of lines) {
    if (indentOf(l) === base && /^\s*([-*]|\d+\.)\s+/.test(l)) items.push({ text: l.replace(/^\s*([-*]|\d+\.)\s+/, ""), sub: [] });
    else if (items.length) {
      if (indentOf(l) > base && /^\s*([-*]|\d+\.)\s+/.test(l)) items[items.length - 1].sub.push(l);
      else if (items[items.length - 1].sub.length) items[items.length - 1].sub.push(l);
      else items[items.length - 1].text += " " + l.trim();
    }
  }
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((it) => `<li>${inline(it.text)}${it.sub.length ? renderList(it.sub) : ""}</li>`).join("")}</${tag}>`;
}

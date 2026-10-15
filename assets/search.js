// Search: titles first, then summaries, over an index the build writes. Enter opens the first match.
(() => {
  const q = document.getElementById("q");
  const out = document.getElementById("results");
  if (!q || !out) return;
  let index = null;
  const load = () => index || (index = fetch("search.json").then((r) => r.json()));
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  async function run() {
    const term = q.value.trim().toLowerCase();
    if (!term) { out.innerHTML = ""; return; }
    const pages = await load();
    const score = (p) => {
      const t = p.t.toLowerCase();
      if (t === term) return 0;
      if (t.startsWith(term)) return 1;
      if (t.includes(term)) return 2;
      if (p.s.toLowerCase().includes(term)) return 3;
      return 9;
    };
    const hits = pages.map((p) => [score(p), p]).filter(([s]) => s < 9).sort((a, b) => a[0] - b[0] || a[1].t.localeCompare(b[1].t)).slice(0, 12);
    out.innerHTML = hits.map(([, p], i) => `<li><a href="${p.u}"${i === 0 ? ' class="on"' : ""}>${esc(p.t)}<small>${esc(p.s.slice(0, 90))}</small></a></li>`).join("");
  }
  q.addEventListener("input", run);
  q.addEventListener("focus", load);
  q.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { const a = out.querySelector("a"); if (a) location.href = a.href; }
    if (e.key === "Escape") { q.value = ""; out.innerHTML = ""; }
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search")) out.innerHTML = ""; });
})();

// Tema claro/oscuro
(function () {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        const dark = root.getAttribute("data-theme") === "dark" ||
          (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
        const next = dark ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
      });
    }

    // Botón copiar en cada bloque de comandos (sin prompts ni comentarios)
    document.querySelectorAll(".cmd").forEach(function (block) {
      const pre = block.querySelector("pre");
      if (!pre) return;
      const b = document.createElement("button");
      b.className = "copy-btn";
      b.textContent = "copiar";
      b.addEventListener("click", function () {
        const clone = pre.cloneNode(true);
        clone.querySelectorAll(".p, .c, .o").forEach(function (n) { n.remove(); });
        const text = clone.textContent.split("\n").map(function (l) { return l.trimEnd(); })
          .filter(function (l) { return l.trim() !== ""; }).join("\n");
        navigator.clipboard.writeText(text).then(function () {
          b.textContent = "¡copiado!";
          setTimeout(function () { b.textContent = "copiar"; }, 1200);
        });
      });
      block.appendChild(b);
    });

    // Índice lateral automático a partir de los h2
    const toc = document.querySelector(".toc ol");
    if (toc) {
      document.querySelectorAll("main h2[id]").forEach(function (h) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        toc.appendChild(li);
      });
    }
  });
})();

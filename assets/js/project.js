/* =====================================================================
   PAGE DÉTAIL D'UN PROJET — projet.html?id=<id>
   ===================================================================== */
(function () {
  "use strict";

  var P = window.PORTFOLIO || {};
  var U = window.UI;
  var esc = U.esc, icon = U.icon;
  var root = document.getElementById("project-root");
  if (!root) return;

  var projects = P.projects || [];
  var id = new URLSearchParams(window.location.search).get("id");
  var idx = -1;
  for (var i = 0; i < projects.length; i++) if (projects[i].id === id) { idx = i; break; }

  if (idx < 0) {
    root.innerHTML = '<section class="container empty-state">' +
      '<p class="eyebrow"><b>404</b> Projet</p><h1 class="h2">Projet introuvable</h1>' +
      '<p class="lead">Ce projet n\'existe pas ou a été renommé.</p>' +
      '<a class="btn btn-primary" href="index.html#projets">' + icon("arrowLeft") + "Retour aux projets réalisés</a></section>";
    return;
  }

  var p = projects[idx];
  var prev = projects[(idx - 1 + projects.length) % projects.length], next = projects[(idx + 1) % projects.length];
  document.title = p.title + " — Projet réalisé " + p.number + " | Jacques Houndjetode";
  var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", p.summary || "");

  var n = 0;
  function num() { n++; return ("0" + n).slice(-2); }
  function block(title, body) {
    if (!body) return "";
    return '<section class="pd-block" data-reveal><header class="pd-block__head"><span class="pd-block__num">' + num() + '</span><h2 class="pd-block__title">' + title + '</h2></header><div class="pd-block__body">' + body + "</div></section>";
  }
  function table(rows, h1, h2) {
    if (!rows || !rows.length) return "";
    return '<div class="table-wrap"><table class="parts"><thead><tr><th scope="col">' + h1 + '</th><th scope="col">' + h2 + "</th></tr></thead><tbody>" +
      rows.map(function (r) { return "<tr><td>" + esc(r.name) + "</td><td>" + esc(r.role) + "</td></tr>"; }).join("") + "</tbody></table></div>";
  }
  function checks(arr) { return arr && arr.length ? '<ul class="checks">' + arr.map(function (x) { return "<li>" + icon("check") + "<span>" + esc(x) + "</span></li>"; }).join("") + "</ul>" : ""; }

  var gallery = p.gallery || [];
  var hardware = table(p.hardware, "Composant", "Rôle") + table(p.comms, "Protocole", "Usage");
  var pcbSpecs = (p.pcb && p.pcb.length ? '<dl class="specs">' + p.pcb.map(function (s) { return '<div class="spec"><dt>' + esc(s.label) + "</dt><dd>" + esc(s.value) + "</dd></div>"; }).join("") + "</dl>" : "") + checks(p.technical);
  var files = (p.files || []).length ? '<div class="files">' + p.files.map(function (f) { return '<a class="btn btn-secondary btn-sm" href="' + esc(f.href) + '" target="_blank" rel="noopener">' + icon("file") + esc(f.label) + "</a>"; }).join("") + "</div>" : "";

  root.innerHTML =
    '<section class="pd-hero"><div class="container">' +
      '<a class="back-link" href="index.html#projets">' + icon("arrowLeft") + "Tous les projets réalisés</a>" +
      '<div class="pd-hero__inner">' +
        "<div>" +
          '<p class="eyebrow"><b>' + esc(p.number) + "</b> " + esc(p.category) + "</p>" +
          '<h1 class="pd-title">' + esc(p.title) + U.todoBadge(p) + "</h1>" +
          '<p class="lead">' + esc(p.summary) + "</p>" +
          '<dl class="pd-facts">' +
            "<div><dt>Rôle personnel</dt><dd>" + esc(p.role) + "</dd></div>" +
            "<div><dt>Cadre</dt><dd>" + esc(p.context) + "</dd></div>" +
            "<div><dt>Outil</dt><dd>Altium Designer</dd></div>" +
          "</dl>" +
          '<div class="pd-actions">' + U.AltiumViewerButton(p, { size: "lg", placeholder: true }) +
            (gallery.length ? '<a class="btn btn-secondary btn-lg" href="#galerie">Voir la galerie</a>' : "") + "</div>" +
        "</div>" +
        '<div class="pd-hero__visual">' + U.ProjectVisual(p) + "</div>" +
      "</div>" +
    "</div></section>" +

    '<div class="container pd-body">' +
      (p.todo ? '<p class="note">' + icon("file", "icon-xs") + "Description absente de l'ancien portfolio — à compléter dans <code>data/projects.js</code>.</p>" : "") +
      block("Présentation", (p.description || []).map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("")) +
      block("Fonctionnement", p.steps && p.steps.length ? '<ol class="steps">' + p.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" : "") +
      block("Matériel & communications", hardware) +
      block("Conception PCB", pcbSpecs + files) +
      block("Points forts", checks(p.highlights)) +
      block("Applications", p.applications && p.applications.length ? '<ul class="tag-list">' + p.applications.map(function (a) { return '<li class="tag">' + esc(a) + "</li>"; }).join("") + "</ul>" : "") +
      block("Technologies", '<ul class="tag-list">' + (p.technologies || []).map(function (t) { return '<li class="tag tag--orange">' + esc(t) + "</li>"; }).join("") + "</ul>") +
      (gallery.length ? '<section class="pd-block" id="galerie" data-reveal><header class="pd-block__head"><span class="pd-block__num">' + num() + '</span><h2 class="pd-block__title">Galerie</h2></header><div class="pd-block__body">' + U.ProjectGallery(gallery) + "</div></section>" : "") +

      '<section class="altium-band" data-reveal>' +
        '<div><p class="eyebrow"><b>A365</b> Altium 365</p><h2 class="h3">Explorer le projet dans le Web Viewer</h2>' +
        "<p>Schéma, PCB et vue 3D interactifs, en lecture seule, directement dans le navigateur.</p></div>" +
        U.AltiumViewerButton(p, { size: "lg", placeholder: true }) +
      "</section>" +

      '<nav class="pd-pager" aria-label="Autres projets réalisés">' +
        '<a class="pd-pager__link" href="projet.html?id=' + encodeURIComponent(prev.id) + '"><span class="mono">' + icon("arrowLeft", "icon-xs") + "Précédent</span><strong>" + esc(prev.title) + "</strong></a>" +
        '<a class="pd-pager__link pd-pager__link--next" href="projet.html?id=' + encodeURIComponent(next.id) + '"><span class="mono">Suivant' + icon("arrow", "icon-xs") + "</span><strong>" + esc(next.title) + "</strong></a>" +
      "</nav>" +
    "</div>";

  U.ProjectGallery.mount(root, gallery);

  /* Nav compacte + apparition */
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () { nav.classList.toggle("is-compact", window.scrollY > 24); }, { passive: true });
  var els = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    els.forEach(function (e) { e.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("is-visible"); io.unobserve(x.target); } }); }, { rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* Pied de page */
  var C = P.contact || {};
  var fl = document.getElementById("footer-links");
  if (fl) fl.innerHTML = [C.email && ["Email", "mailto:" + C.email], C.linkedin && ["LinkedIn", C.linkedin], C.github && ["GitHub", C.github]].filter(Boolean)
    .map(function (l) { return '<li><a href="' + esc(l[1]) + '"' + (/^http/.test(l[1]) ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + l[0] + " " + icon("arrowUpRight", "icon-xs") + "</a></li>"; }).join("");
  var yr = document.getElementById("year"); if (yr) yr.textContent = new Date().getFullYear();
})();

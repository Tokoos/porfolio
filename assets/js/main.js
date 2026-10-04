/* =====================================================================
   PAGE D'ACCUEIL — rendu des sections à partir de /data
   ===================================================================== */
(function () {
  "use strict";

  var P = window.PORTFOLIO || {};
  var U = window.UI;
  var esc = U.esc, icon = U.icon;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function get(path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, P); }
  function html(sel, markup) { var el = $(sel); if (el) el.innerHTML = markup; return el; }

  /* ---------- Liaisons simples [data-bind] + CV ---------- */
  $$("[data-bind]").forEach(function (el) { var v = get(el.getAttribute("data-bind")); if (v) el.textContent = v; });
  var cv = (P.profile && P.profile.cv) || {};
  $$("[data-cv-download]").forEach(function (a) { a.href = cv.file; a.setAttribute("download", cv.downloadName || ""); });
  var fp = $("#fact-projects"); if (fp) fp.textContent = (P.projects || []).length;

  /* ---------- Bandeau ---------- */
  var hl = (P.profile.highlights || []).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("");
  html("#band-track", '<ul class="band__list">' + hl + "</ul>");

  /* ---------- À propos ---------- */
  var A = P.profile.about || {};
  var lead = $("#about-lead"); if (lead) lead.textContent = A.lead || "";
  html("#about-paragraphs", (A.paragraphs || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""));
  html("#about-keywords", (A.keywords || []).map(function (k) { return '<li class="tag tag--orange">' + esc(k) + "</li>"; }).join(""));
  html("#about-domains", (A.domains || []).map(function (d) { return "<li>" + esc(d) + "</li>"; }).join(""));
  html("#about-languages", (A.languages || []).map(function (l) { return "<li>" + esc(l.name) + " <span>— " + esc(l.level) + "</span></li>"; }).join(""));
  if (A.image) { var ai = $("#about-img"); if (ai) { ai.src = A.image.src; ai.alt = A.image.alt || ""; } }

  /* ---------- Projets réalisés + filtres ---------- */
  var grid = $("#project-grid"), filters = $("#project-filters");
  if (grid) grid.innerHTML = (P.projects || []).map(U.ProjectCard).join("");
  if (filters) {
    var cats = (P.projectCategories || []).filter(function (c) {
      return c.id === "all" || (P.projects || []).some(function (p) { return (p.categories || []).indexOf(c.id) >= 0; });
    });
    filters.innerHTML = cats.map(function (c, i) {
      return '<button type="button" class="filter" data-filter="' + esc(c.id) + '" aria-pressed="' + (i === 0) + '">' + esc(c.label) + "</button>";
    }).join("");
    filters.addEventListener("click", function (e) {
      var b = e.target.closest("[data-filter]");
      if (!b) return;
      var f = b.getAttribute("data-filter");
      $$("[data-filter]", filters).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      var n = 0;
      $$(".project-card", grid).forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-categories").split(" ").indexOf(f) >= 0;
        card.hidden = !show;
        // la carte mise en avant ne s'étend sur 2 colonnes que dans la vue « Tous »
        card.classList.toggle("project-card--featured", show && f === "all" && card === grid.firstElementChild && P.projects[0].featured);
        if (show) { card.classList.remove("is-entering"); void card.offsetWidth; card.style.setProperty("--d", (n++ % 2) * 70 + "ms"); card.classList.add("is-entering", "is-visible"); }
      });
      var live = $("#project-count");
      if (live) live.textContent = n + " projet" + (n > 1 ? "s réalisés" : " réalisé");
    });
  }

  /* ---------- Expérience / formation ---------- */
  html("#experience-list", U.ExperienceTimeline(P.experience));
  html("#education", U.EducationTimeline(P.education));
  html("#certifications", (P.certifications || []).map(U.CertificationCard).join(""));

  /* ---------- Moments forts ---------- */
  var moments = P.moments || [];
  var mg = html("#moments-grid", moments.map(function (it, i) {
    return '<li class="moment' + (it.featured ? " moment--featured" : "") + '" data-reveal style="--d:' + (i % 3) * 80 + 'ms">' +
      '<button type="button" class="moment__btn" data-moment="' + i + '" aria-label="Agrandir : ' + esc(it.title) + '">' +
        '<img src="' + esc(it.src) + '" alt="' + esc(it.alt || it.title) + '" loading="lazy" decoding="async">' +
        '<span class="moment__cap"><strong>' + esc(it.title) + "</strong>" + (it.detail ? "<span>" + esc(it.detail) + "</span>" : "") + "</span>" +
      "</button></li>";
  }).join(""));
  if (mg) mg.addEventListener("click", function (e) {
    var b = e.target.closest("[data-moment]");
    if (b) U.ProjectGallery.open(moments.map(function (it) { return { src: it.src, caption: it.title + (it.detail ? " — " + it.detail : "") }; }), +b.getAttribute("data-moment"));
  });

  /* ---------- Skills ---------- */
  html("#skills-list", (P.skills || []).map(function (g, i) {
    return '<article class="skill-cat' + (g.research ? " skill-cat--research" : "") + '" data-reveal style="--d:' + (i % 2) * 80 + 'ms">' +
      '<h3 class="skill-cat__title">' + esc(g.title) + (g.research ? '<span class="skill-cat__tag">Research</span>' : "") + "</h3>" +
      '<ul class="skill-list">' + (g.items || []).map(function (s) { return U.SkillBadge(s); }).join("") + "</ul></article>";
  }).join(""));

  /* ---------- Recherche ---------- */
  var R = P.research || {};
  var rt = $("#research-title");
  if (rt) rt.innerHTML = esc(R.title || "").replace("Tunnel FET", "<em>Tunnel FET</em>").replace("Edge AI", "<em>Edge AI</em>");
  var rc = $("#research-context"); if (rc) rc.textContent = R.context || "";
  var rp = $("#research-problem"); if (rp) rp.textContent = R.problem || "";
  html("#research-pipeline", (R.pipeline || []).map(function (s, i, arr) {
    return '<li class="pipe-node"><p class="pipe-node__label"><i>' + ("0" + (i + 1)).slice(-2) + "</i>" + esc(s.label) + "</p>" +
      '<p class="pipe-node__detail">' + esc(s.detail) + "</p></li>" + (i < arr.length - 1 ? '<li class="pipe-link" aria-hidden="true"></li>' : "");
  }).join(""));
  function li(arr) { return (arr || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); }
  html("#research-objectives", li(R.objectives));
  html("#research-tech", li(R.technologies));
  html("#research-apps", li(R.applications));
  var pubs = R.publications || [];
  var rpub = $("#publications");
  if (rpub && pubs.length) {
    rpub.hidden = false;
    rpub.querySelector("ul").innerHTML = pubs.map(function (p) {
      var url = U.safeUrl(p.url);
      var t = "« " + esc(p.title) + " »";
      return '<li class="pub"><span class="pub__venue">' + esc(p.venue) + " · " + esc(p.year) + '</span><p class="pub__title">' +
        (url ? '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + t + " " + icon("arrowUpRight", "icon-xs") + "</a>" : t) + "</p></li>";
    }).join("");
  }

  /* ---------- Contact + pied de page ---------- */
  var C = P.contact || {};
  var links = [];
  if (C.email) links.push({ id: "mail", label: "Email", value: C.email, href: "mailto:" + C.email });
  if (C.linkedin) links.push({ id: "linkedin", label: "LinkedIn", value: C.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), href: C.linkedin, ext: true });
  if (C.github) links.push({ id: "github", label: "GitHub", value: C.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), href: C.github, ext: true });
  if (C.phone) links.push({ id: "phone", label: "Téléphone", value: C.phone, href: "tel:" + C.phone.replace(/\s+/g, "") });
  function attrs(l) { return 'href="' + esc(U.safeUrl(l.href) || l.href) + '"' + (l.ext ? ' target="_blank" rel="noopener noreferrer"' : ""); }
  html("#contact-links", links.map(function (l) {
    return '<li><a class="contact-link" ' + attrs(l) + '><span class="contact-link__label">' + esc(l.label) + '</span><span class="contact-link__value">' + esc(l.value) + "</span>" + icon("arrowUpRight") + "</a></li>";
  }).join(""));
  html("#footer-links", links.filter(function (l) { return l.id !== "phone"; }).map(function (l) {
    return "<li><a " + attrs(l) + ">" + esc(l.label) + " " + icon("arrowUpRight", "icon-xs") + "</a></li>";
  }).join(""));
  var cta = $("#contact-cta"); if (cta && C.email) cta.href = "mailto:" + C.email;
  var cf = $("#contact-form");
  if (cf) { cf.innerHTML = U.ContactForm(); U.ContactForm.mount($("[data-contact-form]", cf)); }
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ===================================================================
     Interactions
     =================================================================== */
  var nav = $("#nav"), toggle = $(".nav__toggle"), menu = $("#mobile-menu");
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    menu.hidden = !open;
    document.documentElement.classList.toggle("is-locked", open);
    nav.classList.toggle("is-open", open);
    if (open) { var f = $("a", menu); if (f) f.focus(); }
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) { setMenu(false); toggle.focus(); } });
    window.matchMedia("(min-width: 1141px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });
  }

  var navLinks = $$(".nav__links a");
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { var on = a.getAttribute("href") === "#" + en.target.id; a.classList.toggle("is-active", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { so.observe(s); });
  }

  /* Apparition progressive */
  var revealEls = $$("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); ro.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    revealEls.forEach(function (el) { ro.observe(el); });
  }

  var trace = initSignalTrace();
  var ticking = false;
  function onScroll() {
    ticking = false;
    nav.classList.toggle("is-compact", window.scrollY > 24);
    if (trace) trace.update();
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ===================================================================
     Piste PCB signature : ligne orange fine à angles droits qui relie
     les sections et se dessine pendant le scroll.
     =================================================================== */
  function initSignalTrace() {
    var main = $("#main"), svg = $("#signal-trace");
    if (!main || !svg) return null;
    var base = $(".trace-base", svg), live = $(".trace-live", svg), head = $(".trace-head", svg), halo = $(".trace-halo", svg), nodesG = $(".trace-nodes", svg);
    var length = 0, enabled = false, lastLen = -1;

    function layout() {
      enabled = window.innerWidth >= 1000;
      svg.style.display = enabled ? "" : "none";
      if (!enabled) return;
      var mainTop = main.getBoundingClientRect().top + window.scrollY;
      var H = main.offsetHeight, W = main.clientWidth;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.style.height = H + "px";
      var container = $(".hero .container");
      var contentLeft = container.getBoundingClientRect().left + parseFloat(getComputedStyle(container).paddingLeft);
      var xA = Math.max(16, Math.min(contentLeft - 32, 110)), xB = xA - 12;
      var showLabels = contentLeft > 160;

      var anchors = $$("[data-trace]").map(function (el) {
        var h = $(".eyebrow, .trace-anchor", el) || el, r = h.getBoundingClientRect();
        return { y: r.top + window.scrollY - mainTop + r.height / 2, label: el.getAttribute("data-trace") };
      });
      var band = $(".band").getBoundingClientRect();
      var sy = band.bottom + window.scrollY - mainTop + 40;
      var d = "M" + (contentLeft - 8) + " " + sy + " H" + xA;
      var x = xA, nodes = [];
      anchors.forEach(function (a, i) {
        var nx = i % 2 ? xB : xA;
        if (nx !== x) { d += " V" + (a.y - 70) + " H" + nx; x = nx; } // jog à 90°
        d += " V" + a.y;
        nodes.push({ x: nx, y: a.y, label: a.label });
      });
      var endY = H - 60;
      d += " V" + endY + " H" + (x + 60);

      base.setAttribute("d", d); live.setAttribute("d", d);
      length = live.getTotalLength();
      live.style.strokeDasharray = length + " " + length;
      nodesG.innerHTML = nodes.map(function (n) {
        return '<g class="trace-node" data-y="' + n.y + '">' +
          '<path class="trace-stub" d="M' + (n.x + 5) + " " + n.y + " H" + (contentLeft - 14) + '"/>' +
          '<rect class="trace-via" x="' + (n.x - 4.5) + '" y="' + (n.y - 4.5) + '" width="9" height="9" rx="1.5"/>' +
          (showLabels ? '<text class="trace-label" x="' + (n.x - 14) + '" y="' + (n.y + 3.5) + '" text-anchor="end">' + esc(n.label.toUpperCase()) + "</text>" : "") +
        "</g>";
      }).join("") + '<g class="trace-node trace-node--end" data-y="' + endY + '"><rect class="trace-pad" x="' + (x + 60) + '" y="' + (endY - 6) + '" width="12" height="12" rx="2"/></g>';
      lastLen = -1;
      update();
    }
    function lengthAtY(y) {
      var lo = 0, hi = length;
      for (var k = 0; k < 18; k++) { var mid = (lo + hi) / 2; if (live.getPointAtLength(mid).y < y) lo = mid; else hi = mid; }
      return lo;
    }
    function update() {
      if (!enabled || !length) return;
      var mainTop = main.getBoundingClientRect().top + window.scrollY;
      var L = reduceMotion ? length : Math.max(0, Math.min(length, lengthAtY(window.scrollY + window.innerHeight * 0.6 - mainTop)));
      if (Math.abs(L - lastLen) < 0.5) return;
      lastLen = L;
      live.style.strokeDashoffset = String(length - L);
      var p = live.getPointAtLength(L);
      [head, halo].forEach(function (c) { c.setAttribute("cx", p.x); c.setAttribute("cy", p.y); c.style.opacity = L > 2 && L < length - 2 ? 1 : 0; });
      $$(".trace-node", nodesG).forEach(function (n) { n.classList.toggle("is-on", +n.getAttribute("data-y") <= p.y + 1); });
    }
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(layout, 150); });
    window.addEventListener("load", layout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
    if (window.ResizeObserver) { var rot; new ResizeObserver(function () { clearTimeout(rot); rot = setTimeout(layout, 200); }).observe(main); }
    layout();
    return { update: update };
  }
})();

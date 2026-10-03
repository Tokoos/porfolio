/* =====================================================================
   COMPOSANTS RÉUTILISABLES
   ProjectCard · ExperienceTimeline · EducationTimeline · SkillBadge
   CertificationCard · ContactForm · AltiumViewerButton · ProjectGallery
   ===================================================================== */
window.UI = (function () {
  "use strict";

  var P = window.PORTFOLIO || {};

  /* ---------- Utilitaires ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function showTodo() { return !!(P.site && P.site.showTodoBadges); }
  function todoBadge(o) { return o && o.todo && showTodo() ? '<span class="badge-todo" title="Information absente de l\'ancien portfolio">À compléter</span>' : ""; }
  function safeUrl(u) {
    if (!u) return "";
    try {
      var url = new URL(u, window.location.href);
      return /^(https?:|file:)$/.test(url.protocol) ? url.href : "";
    } catch (e) { return ""; }
  }
  function isExternal(u) { return /^https?:\/\//i.test(u || ""); }

  /* ---------- Icônes (traits fins, 24×24) ---------- */
  var ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrowUpRight: '<path d="M7 17L17 7M8 7h9v9"/>',
    arrowDown: '<path d="M12 5v14M6 13l6 6 6-6"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 17v2.5A1.5 1.5 0 005.5 21h13a1.5 1.5 0 001.5-1.5V17"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5L12 13l8.5-6.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.6v.1M11.5 16v-3.2c0-1.4 1-2.3 2.2-2.3s2 .9 2 2.3V16M11.5 10.5V16"/>',
    github: '<path d="M9 19c-4.5 1.4-4.5-2.2-6.3-2.7m12.6 4.5v-3.5a3 3 0 00-.9-2.4c2.9-.3 6-1.4 6-6.4a5 5 0 00-1.4-3.5 4.6 4.6 0 00-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 00-6.5 0C6.3 1.2 5.2 1.5 5.2 1.5a4.6 4.6 0 00-.1 3.5 5 5 0 00-1.4 3.5c0 5 3.1 6.1 6 6.4a3 3 0 00-.9 2.4V21"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 13.8L7 22l5-3 5 3-1.5-8.2"/>',
    file: '<path d="M14 3H6.5A1.5 1.5 0 005 4.5v15A1.5 1.5 0 006.5 21h11a1.5 1.5 0 001.5-1.5V8l-5-5z"/><path d="M14 3v5h5M8.5 13h7M8.5 17h5"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    zoomIn: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5M11 8v6M8 11h6"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    chevronLeft: '<path d="M15 5l-7 7 7 7"/>',
    chevronRight: '<path d="M9 5l7 7-7 7"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    check: '<path d="M4 12.5l5 5L20 6.5"/>'
  };
  function icon(name, cls) {
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- SkillBadge ---------- */
  function SkillBadge(skill, opts) {
    opts = opts || {};
    var o = typeof skill === "string" ? { name: skill } : skill;
    var glyph = o.icon
      ? '<img class="skill-badge__logo" src="assets/img/icons/' + esc(o.icon) + '.svg" alt="" width="16" height="16" loading="lazy" decoding="async">'
      : '<svg class="skill-badge__glyph" viewBox="0 0 16 16" aria-hidden="true"><rect x="4.5" y="4.5" width="7" height="7" rx="1.2"/><path d="M6.5 2v2.5M9.5 2v2.5M6.5 11.5V14M9.5 11.5V14M2 6.5h2.5M2 9.5h2.5M11.5 6.5H14M11.5 9.5H14"/></svg>';
    return '<li class="skill-badge' + (o.core ? " skill-badge--core" : "") + (opts.variant ? " skill-badge--" + opts.variant : "") + '">' +
      glyph + "<span>" + esc(o.name) + "</span>" + (o.core ? '<span class="skill-badge__core">Core</span>' : "") + "</li>";
  }

  /* ---------- AltiumViewerButton ----------
     Lien public Altium 365 → bouton orange (nouvel onglet).
     Pas de lien → rien (option `placeholder` pour afficher « bientôt »). */
  function AltiumViewerButton(project, opts) {
    opts = opts || {};
    var url = safeUrl(project && project.altiumViewerUrl);
    var size = opts.size ? " btn-" + opts.size : "";
    if (!url) {
      return opts.placeholder
        ? '<span class="btn btn-muted' + size + '" aria-disabled="true">' + icon("layers") + "Altium 365 — lien bientôt disponible</span>"
        : "";
    }
    return '<a class="btn btn-primary' + size + '" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' +
      "Voir sur Altium 365 " + icon("arrowUpRight") + '<span class="sr-only"> (nouvel onglet)</span></a>';
  }

  /* ---------- Visuel d'un projet (vraie image ou fiche technique) ---------- */
  function ProjectVisual(p, cls) {
    if (p.cover) {
      return '<img class="' + (cls || "") + '" src="' + esc(p.cover) + '" alt="' + esc(p.title) + ' — visuel PCB" loading="lazy" decoding="async">';
    }
    var specs = p.specs || p.technologies || [];
    return '<div class="spec-visual ' + (cls || "") + '" role="img" aria-label="' + esc(p.title) + ' — fiche technique">' +
      '<svg class="spec-visual__trace" viewBox="0 0 200 120" aria-hidden="true"><path d="M200 24 H120 V70 H60 V104"/><circle cx="60" cy="104" r="4"/><circle cx="120" cy="24" r="3"/></svg>' +
      '<span class="spec-visual__num">P' + esc(p.number) + "</span>" +
      '<ul class="spec-visual__list">' + specs.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>" +
      '<span class="spec-visual__note">Projet professionnel — visuels non publiés</span>' +
    "</div>";
  }

  /* ---------- ProjectCard ---------- */
  function ProjectCard(p, i) {
    var href = "projet.html?id=" + encodeURIComponent(p.id);
    return '<article class="project-card' + (p.featured ? " project-card--featured" : "") + '" data-categories="' + esc((p.categories || []).join(" ")) + '" data-reveal style="--d:' + ((i % 2) * 90) + 'ms">' +
      '<a class="pc-media" href="' + href + '" tabindex="-1" aria-hidden="true">' + ProjectVisual(p, "pc-media__img") + '<span class="pc-status">Réalisé</span></a>' +
      '<div class="pc-body">' +
        '<p class="pc-meta"><span class="pc-num">' + esc(p.number) + "</span><span>" + esc(p.category) + "</span></p>" +
        '<h3 class="pc-title"><a href="' + href + '">' + esc(p.title) + "</a>" + todoBadge(p) + "</h3>" +
        '<p class="pc-summary">' + esc(p.summary) + "</p>" +
        '<ul class="tag-list" aria-label="Technologies">' + (p.technologies || []).map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") + "</ul>" +
        '<div class="pc-actions">' +
          '<a class="link-arrow" href="' + href + '">Voir le projet ' + icon("arrow") + "</a>" +
          AltiumViewerButton(p, { size: "sm" }) +
        "</div>" +
      "</div>" +
    "</article>";
  }

  /* ---------- ExperienceTimeline ---------- */
  function ExperienceTimeline(items) {
    var projects = P.projects || [];
    return '<ol class="timeline">' + (items || []).map(function (x, i) {
      var linked = (x.projects || []).map(function (id) { return projects.filter(function (p) { return p.id === id; })[0]; }).filter(Boolean);
      return '<li class="tl-item" data-reveal style="--d:' + i * 90 + 'ms">' +
        '<div class="tl-when"><p class="tl-period">' + esc(x.period) + "</p>" + (x.location ? '<p class="tl-loc">' + esc(x.location) + "</p>" : "") + "</div>" +
        '<div class="tl-what">' +
          '<h3 class="tl-title">' + esc(x.role) + todoBadge(x) + "</h3>" +
          '<p class="tl-org">' + esc(x.company) + "</p>" +
          (x.description ? '<p class="tl-desc">' + esc(x.description) + "</p>" : "") +
          (x.points && x.points.length ? '<ul class="tl-points">' + x.points.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "") +
          (x.tags && x.tags.length ? '<ul class="tag-list">' + x.tags.map(function (t) { return '<li class="tag tag--orange">' + esc(t) + "</li>"; }).join("") + "</ul>" : "") +
          (linked.length ? '<p class="tl-projects"><span>Réalisations :</span> ' + linked.map(function (p) { return '<a href="projet.html?id=' + encodeURIComponent(p.id) + '">' + esc(p.title) + "</a>"; }).join("") + "</p>" : "") +
        "</div></li>";
    }).join("") + "</ol>";
  }

  /* ---------- EducationTimeline ---------- */
  function EducationTimeline(items) {
    return '<ol class="timeline timeline--edu">' + (items || []).map(function (e, i) {
      return '<li class="tl-item" data-reveal style="--d:' + i * 90 + 'ms">' +
        '<div class="tl-when"><p class="tl-period">' + esc(e.period || "—") + "</p></div>" +
        '<div class="tl-what">' + (e.logo ? '<img class="tl-logo" src="' + esc(e.logo) + '" alt="Logo ' + esc(e.school) + '" width="56" height="56" loading="lazy">' : "") +
          '<h3 class="tl-title">' + esc(e.degree) + todoBadge(e) + "</h3>" +
          (e.specialty ? '<p class="tl-spec">' + esc(e.specialty) + "</p>" : "") +
          '<p class="tl-org">' + esc(e.school) + (e.location ? " · " + esc(e.location) : "") + "</p>" +
          (e.description ? '<p class="tl-desc">' + esc(e.description) + "</p>" : "") +
        "</div></li>";
    }).join("") + "</ol>";
  }

  /* ---------- CertificationCard ---------- */
  function CertificationCard(c, i) {
    var url = safeUrl(c.url), verify = safeUrl(c.verifyUrl);
    var thumb = c.image
      ? '<img src="' + esc(c.image) + '" alt="" loading="lazy" decoding="async">'
      : '<div class="cert-card__ph" aria-hidden="true"><span>Certificat · ' + esc(c.year) + "</span><strong>" + esc(c.issuer) + "</strong></div>";
    var title = url
      ? '<a class="cert-card__link" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(c.name) + '<span class="sr-only"> — voir le certificat (nouvel onglet)</span></a>'
      : esc(c.name);
    return '<li data-reveal style="--d:' + ((i || 0) % 3) * 80 + 'ms"><article class="cert-card' + (url ? " is-link" : "") + '">' +
      '<div class="cert-card__thumb">' + thumb + (url ? '<span class="cert-card__open" aria-hidden="true">' + icon("zoomIn") + "</span>" : "") + "</div>" +
      '<div class="cert-card__body"><h3 class="cert-card__name">' + title + "</h3>" +
      '<p class="cert-card__meta">' + esc(c.issuer) + " · " + esc(c.year) + "</p>" +
      (verify ? '<a class="cert-card__verify" href="' + esc(verify) + '" target="_blank" rel="noopener noreferrer">Vérifier l\'authenticité ' + icon("arrowUpRight", "icon-xs") + "</a>" : "") +
      "</div></article></li>";
  }

  /* ---------- ContactForm ---------- */
  function ContactForm() {
    return '<form class="contact-form" novalidate data-contact-form>' +
      '<div class="field-row">' +
        '<div class="field"><label for="cf-name">Nom</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>' +
        '<div class="field"><label for="cf-email">Email</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>' +
      "</div>" +
      '<div class="field"><label for="cf-subject">Sujet</label><input id="cf-subject" name="subject" type="text" required maxlength="160"></div>' +
      '<div class="field"><label for="cf-message">Message</label><textarea id="cf-message" name="message" rows="5" required minlength="10" maxlength="5000"></textarea></div>' +
      '<div class="hp" aria-hidden="true"><label for="cf-website">Site web</label><input id="cf-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>' +
      '<div class="form-foot">' +
        '<p class="form-note">' + icon("lock", "icon-xs") + "Utilisé uniquement pour vous répondre.</p>" +
        '<button class="btn btn-primary" type="submit">Envoyer le message ' + icon("arrow") + "</button>" +
      "</div>" +
      '<p class="form-status" role="status" aria-live="polite"></p>' +
    "</form>";
  }
  ContactForm.mount = function (form) {
    if (!form) return;
    var cfg = (P.contact && P.contact.form) || {};
    var started = Date.now();
    var status = form.querySelector(".form-status");
    var btn = form.querySelector('button[type="submit"]');
    function setStatus(msg, type) { status.textContent = msg; status.className = "form-status" + (type ? " is-" + type : ""); }
    function fieldError(el, msg) {
      var f = el.closest(".field");
      f.classList.toggle("has-error", !!msg);
      el.setAttribute("aria-invalid", msg ? "true" : "false");
      var e = f.querySelector(".field-error");
      if (msg) {
        if (!e) { e = document.createElement("p"); e.className = "field-error"; e.id = el.id + "-err"; f.appendChild(e); }
        e.textContent = msg; el.setAttribute("aria-describedby", e.id);
      } else if (e) { e.remove(); el.removeAttribute("aria-describedby"); }
    }
    function validate() {
      var ok = true, first = null;
      [["name", "Indiquez votre nom."], ["email", "Indiquez une adresse email valide."], ["subject", "Précisez le sujet."], ["message", "Votre message doit contenir au moins 10 caractères."]].forEach(function (r) {
        var el = form.elements[r[0]];
        var valid = el.value.trim().length > 0 && el.checkValidity();
        fieldError(el, valid ? "" : r[1]);
        if (!valid) { ok = false; first = first || el; }
      });
      if (first) first.focus();
      return ok;
    }
    form.addEventListener("input", function (e) { if (e.target.closest(".has-error")) fieldError(e.target, ""); });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;
      // Anti-spam : pot de miel + délai minimal de saisie
      if (form.elements.website.value) { setStatus("Merci, votre message a bien été envoyé.", "ok"); form.reset(); return; }
      if ((Date.now() - started) / 1000 < (cfg.minSecondsBeforeSubmit || 3)) { setStatus("Merci de patienter quelques secondes avant d'envoyer.", "error"); return; }
      var data = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim(), subject: form.elements.subject.value.trim(), message: form.elements.message.value.trim() };
      var subject = (cfg.subjectPrefix ? cfg.subjectPrefix + " " : "") + data.subject;
      if (!cfg.endpoint) {
        var to = (P.contact && P.contact.email) || "";
        window.location.href = "mailto:" + encodeURIComponent(to) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(data.message + "\n\n— " + data.name + " <" + data.email + ">");
        setStatus("Votre messagerie va s'ouvrir avec le message pré-rempli.", "ok");
        return;
      }
      btn.disabled = true; setStatus("Envoi en cours…");
      fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, _subject: subject, subject: data.subject, message: data.message })
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        setStatus("Merci ! Votre message a bien été envoyé.", "ok");
        form.reset(); started = Date.now();
      }).catch(function () {
        setStatus("L'envoi a échoué. Vous pouvez m'écrire directement par email.", "error");
      }).then(function () { btn.disabled = false; });
    });
  };

  /* ---------- ProjectGallery (+ visionneuse avec zoom) ---------- */
  function ProjectGallery(items) {
    return '<ul class="gallery">' + (items || []).map(function (it, i) {
      return '<li class="gallery__item" data-reveal style="--d:' + i * 70 + 'ms">' +
        '<button type="button" class="gallery__btn" data-gallery-index="' + i + '" aria-label="Agrandir : ' + esc(it.caption || "image " + (i + 1)) + '">' +
          '<img src="' + esc(it.src) + '" alt="' + esc(it.caption || "") + '" loading="lazy" decoding="async">' +
          '<span class="gallery__zoom" aria-hidden="true">' + icon("zoomIn") + "</span>" +
        "</button>" +
        (it.caption ? '<p class="gallery__cap">' + esc(it.caption) + "</p>" : "") +
      "</li>";
    }).join("") + "</ul>";
  }
  var lightbox = null;
  ProjectGallery.open = function (items, start) {
    if (!lightbox) lightbox = buildLightbox();
    lightbox.show(items, start || 0);
  };
  ProjectGallery.mount = function (root, items) {
    if (!root) return;
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-gallery-index]");
      if (b) ProjectGallery.open(items, +b.getAttribute("data-gallery-index"));
    });
  };
  function buildLightbox() {
    var dlg = document.createElement("dialog");
    dlg.className = "lightbox";
    dlg.setAttribute("aria-label", "Visionneuse d'images");
    dlg.innerHTML =
      '<div class="lightbox__bar"><p class="lightbox__cap"></p><p class="lightbox__hint">Clic ou molette pour zoomer</p>' +
      '<button type="button" class="icon-btn" data-lb="close" aria-label="Fermer">' + icon("close") + "</button></div>" +
      '<div class="lightbox__stage"><img class="lightbox__img" alt=""></div>' +
      '<button type="button" class="icon-btn lightbox__nav prev" data-lb="prev" aria-label="Image précédente">' + icon("chevronLeft") + "</button>" +
      '<button type="button" class="icon-btn lightbox__nav next" data-lb="next" aria-label="Image suivante">' + icon("chevronRight") + "</button>" +
      '<p class="lightbox__count" aria-live="polite"></p>';
    document.body.appendChild(dlg);
    var img = dlg.querySelector(".lightbox__img"), stage = dlg.querySelector(".lightbox__stage");
    var cap = dlg.querySelector(".lightbox__cap"), count = dlg.querySelector(".lightbox__count");
    var list = [], idx = 0, scale = 1, ox = 50, oy = 50, lastFocus = null;
    function apply() { img.style.transformOrigin = ox + "% " + oy + "%"; img.style.transform = "scale(" + scale + ")"; stage.classList.toggle("is-zoomed", scale > 1); }
    function render() {
      var it = list[idx]; scale = 1; ox = oy = 50; apply();
      img.src = it.src; img.alt = it.caption || ""; cap.textContent = it.caption || "";
      count.textContent = (idx + 1) + " / " + list.length;
      dlg.classList.toggle("is-single", list.length < 2);
    }
    function origin(e) {
      var r = img.getBoundingClientRect();
      ox = Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100));
      oy = Math.max(0, Math.min(100, ((e.clientY - r.top) / r.height) * 100));
    }
    function step(d) { idx = (idx + d + list.length) % list.length; render(); }
    stage.addEventListener("click", function (e) {
      if (e.target !== img) { if (scale === 1) dlg.close(); return; }
      if (scale > 1) scale = 1; else { origin(e); scale = 2.4; }
      apply();
    });
    stage.addEventListener("mousemove", function (e) {
      if (scale > 1) { var r = stage.getBoundingClientRect(); ox = ((e.clientX - r.left) / r.width) * 100; oy = ((e.clientY - r.top) / r.height) * 100; apply(); }
    });
    stage.addEventListener("wheel", function (e) {
      e.preventDefault(); if (scale === 1) origin(e);
      scale = Math.max(1, Math.min(4, scale - e.deltaY * 0.0025)); apply();
    }, { passive: false });
    dlg.addEventListener("click", function (e) {
      var a = e.target.closest("[data-lb]"); if (!a) return;
      var k = a.getAttribute("data-lb");
      if (k === "close") dlg.close(); if (k === "prev") step(-1); if (k === "next") step(1);
    });
    dlg.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
    dlg.addEventListener("close", function () { document.documentElement.classList.remove("is-locked"); if (lastFocus) lastFocus.focus(); });
    return {
      show: function (items, start) {
        list = items; idx = start; lastFocus = document.activeElement; render();
        document.documentElement.classList.add("is-locked");
        if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
      }
    };
  }

  return {
    esc: esc, icon: icon, safeUrl: safeUrl, isExternal: isExternal, todoBadge: todoBadge,
    SkillBadge: SkillBadge, AltiumViewerButton: AltiumViewerButton, ProjectCard: ProjectCard, ProjectVisual: ProjectVisual,
    EducationTimeline: EducationTimeline, CertificationCard: CertificationCard, ExperienceTimeline: ExperienceTimeline,
    ContactForm: ContactForm, ProjectGallery: ProjectGallery
  };
})();

/* =====================================================================
   REEL PCB — vidéo pilotée par le curseur (scrubbing)
   ---------------------------------------------------------------------
   position du curseur → progression (0–1) → video.currentTime
   - La vidéo reste en pause : aucune lecture continue.
   - Interpolation dans une boucle requestAnimationFrame (pas de mise à jour
     de currentTime à chaque mousemove) + attente de la fin de chaque seek
     pour éviter la file d'attente de décodage et le jitter.
   - Souris : position horizontale absolue dans la zone vidéo.
   - Tactile : glissement horizontal du doigt (relatif), le scroll vertical reste libre.
   - Clavier : flèches gauche / droite, Début / Fin.
   Les fichiers sont ré-encodés avec une image clé toutes les 5 images
   (voir assets/video/) pour des déplacements instantanés.
   ===================================================================== */
(function () {
  "use strict";

  var zone = document.getElementById("reel");
  if (!zone) return;
  var video = zone.querySelector("video");
  var bar = zone.querySelector(".reel__bar");
  var timeEl = zone.querySelector(".reel__time");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Version adaptée à l'écran (720p desktop, 480p mobile)
  var small = window.matchMedia("(max-width: 700px)").matches;
  video.src = zone.getAttribute(small ? "data-src-small" : "data-src");
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";

  var duration = 0, ready = false;
  var target = 0, current = 0, raf = 0, interacted = false;
  var unlocking = false;
  var EASE = reduceMotion ? 1 : 0.16;          // facteur d'interpolation par image
  var FRAME = 1 / 30;

  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function fmt(s) { s = Math.max(0, Math.round(s)); return ("0" + Math.floor(s / 60)).slice(-2) + ":" + ("0" + (s % 60)).slice(-2); }

  function kick() { if (!raf) raf = requestAnimationFrame(tick); }

  function tick() {
    raf = 0;
    var d = target - current;
    current = Math.abs(d) < 0.0004 ? target : current + d * EASE;

    // Interface (barre, temps, accessibilité)
    bar.style.transform = "scaleX(" + current.toFixed(4) + ")";
    if (ready) {
      timeEl.textContent = fmt(current * duration) + " / " + fmt(duration);
      var pct = Math.round(current * 100);
      if (zone.getAttribute("aria-valuenow") !== String(pct)) {
        zone.setAttribute("aria-valuenow", pct);
        zone.setAttribute("aria-valuetext", pct + " %");
      }
      // Ne déplace la vidéo que si le seek précédent est terminé et si l'écart dépasse une image
      if (!video.seeking) {
        var t = current * Math.max(0, duration - FRAME);
        if (Math.abs(video.currentTime - t) > FRAME * 0.5) video.currentTime = t;
      }
    }
    if (current !== target || video.seeking) kick();
  }

  function setTarget(p) {
    target = clamp(p);
    if (!interacted) { interacted = true; zone.classList.add("is-touched"); }
    kick();
  }

  video.addEventListener("loadedmetadata", function () {
    duration = video.duration || 0;
    ready = duration > 0;
    zone.classList.add("is-ready");
    video.pause();
    kick();
  });
  video.addEventListener("seeked", kick);
  // Garde-fou : jamais de lecture continue
  video.addEventListener("play", function () { if (!unlocking) video.pause(); });

  /* ----- Souris / stylet : position absolue dans la zone ----- */
  function fromEvent(e) {
    var r = zone.getBoundingClientRect();
    return (e.clientX - r.left) / r.width;
  }
  zone.addEventListener("pointerenter", function (e) { if (e.pointerType !== "touch") setTarget(fromEvent(e)); });
  zone.addEventListener("pointermove", function (e) { if (e.pointerType !== "touch") setTarget(fromEvent(e)); });
  // À la sortie : on conserve la dernière position (rien à faire)

  /* ----- Tactile : glissement horizontal relatif ----- */
  var touch = null;
  function unlockIOS() {
    // Certains navigateurs mobiles ne chargent les images qu'après une interaction
    if (video.readyState >= 2) return;
    unlocking = true;
    var pr = video.play();
    if (pr && pr.then) pr.then(function () { video.pause(); unlocking = false; }).catch(function () { unlocking = false; });
    else { video.pause(); unlocking = false; }
  }
  zone.addEventListener("pointerdown", function (e) {
    if (e.pointerType !== "touch") return;
    unlockIOS();
    touch = { id: e.pointerId, x: e.clientX, start: target, w: zone.getBoundingClientRect().width };
  });
  zone.addEventListener("pointermove", function (e) {
    if (!touch || e.pointerId !== touch.id) return;
    setTarget(touch.start + (e.clientX - touch.x) / touch.w);
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach(function (ev) {
    zone.addEventListener(ev, function (e) { if (touch && e.pointerId === touch.id) touch = null; });
  });

  /* ----- Clavier ----- */
  zone.addEventListener("keydown", function (e) {
    var step = e.shiftKey ? 0.1 : 0.02;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") setTarget(target + step);
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") setTarget(target - step);
    else if (e.key === "Home") setTarget(0);
    else if (e.key === "End") setTarget(1);
    else return;
    e.preventDefault();
  });

  video.load();
})();

/* =====================================================================
   RECHERCHE
   `publications` : une section s'affiche dès qu'une entrée est ajoutée.
   Exemple : { title: "...", venue: "Conférence / revue", year: "2027", url: "" }
   ===================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.research = {
  label: "Orientation recherche",
  title:
    "Tunnel FET pour la lecture et le prétraitement de signaux de capteurs à très basse tension : vers un Edge AI analogique à énergie minimale",

  pipeline: [
    { label: "Capteur", detail: "Signal physique faible" },
    { label: "TFET", detail: "Transistor à effet tunnel, très basse tension" },
    { label: "Lecture / prétraitement analogique", detail: "Conditionnement au plus près du capteur" },
    { label: "Edge AI", detail: "Décision locale" },
    { label: "Système basse consommation", detail: "Énergie minimale de bout en bout" }
  ],

  context:
    "Les objets connectés et les réseaux de capteurs se multiplient, mais leur autonomie reste limitée par l'énergie consommée pour lire, convertir et transmettre les données — souvent avant même toute décision utile.",
  problem:
    "Les MOSFET conventionnels sont limités par une pente sous le seuil d'environ 60 mV/décade à température ambiante, ce qui empêche de réduire fortement la tension d'alimentation sans dégrader les performances. Comment lire et prétraiter des signaux de capteurs à très basse tension en préservant l'information utile ?",
  objectives: [
    "Étudier le potentiel des TFET pour des front-ends de lecture de capteurs à très basse tension.",
    "Concevoir et simuler des blocs de prétraitement analogique exploitant leurs caractéristiques.",
    "Évaluer le compromis énergie / précision d'une chaîne capteur → décision en périphérie.",
    "Poser les bases d'architectures d'Edge AI analogique et neuromorphique à énergie minimale."
  ],
  technologies: ["Tunnel FET", "Pente sous le seuil < 60 mV/déc", "Circuits analogiques basse tension", "Calcul analogique", "Électronique neuromorphique", "Simulation TCAD / SPICE"],
  applications: ["Capteurs autonomes sans batterie", "Santé & wearables", "Maintenance prédictive", "Réseaux de capteurs environnementaux"],

  publications: [
    { title: "Liquid Classification from Acoustic Signals Using a KAN Model", venue: "IEEE Xplore", year: "2025", url: "" } // ajoutez le lien DOI
  ]
};

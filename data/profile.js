/* =====================================================================
   DONNÉES PERSONNELLES — profil, biographie, CV
   ---------------------------------------------------------------------
   Source : ancien portfolio GitHub (Tokoos/Projet-PCB_Design-porfolio).
   Les champs marqués `todo: true` sont des informations absentes de
   l'ancien portfolio : un badge « À compléter » s'affiche tant que
   PORTFOLIO.site.showTodoBadges vaut true.
   ===================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.site = {
  url: "https://www.votre-domaine.com", // à mettre à jour après déploiement
  showTodoBadges: true                   // passez à false une fois tout complété
};

PORTFOLIO.profile = {
  firstName: "Jacques",
  lastName: "Houndjetode",
  initials: "JH",
  title: "Ingénieur en électronique, micro- et nanoélectronique",
  tagline: "Conception électronique, systèmes embarqués, PCB Design et technologies basse consommation.",
  availability: "Disponible — opportunités & recherche",

  about: {
    lead:
      "Ingénieur en développement de produits électroniques, spécialisé dans la conception de cartes électroniques et le prototypage de systèmes embarqués.",
    paragraphs: [
      "Je conçois des schémas et des PCB multicouches avec contrôle d'impédance sur Altium Designer, pour des applications allant de l'IoT connecté aux systèmes de contrôle industriel.",
      "Mes projets couvrent la détection et l'acquisition de signaux (radar, capteurs de gaz, encodeurs), la communication sans fil et filaire (LoRa, Wi-Fi, Bluetooth, NFC, CAN, UART, I²C, USB), ainsi que la géolocalisation (GPS).",
      "Je maîtrise l'ensemble du cycle de conception : schématique, routage, sélection de composants et préparation du dossier de production complet (BOM, plan d'assemblage, Gerber).",
      "Titulaire d'un master en électronique, micro- et nanoélectronique de HSE University (Moscou), j'ai notamment publié dans IEEE Xplore des travaux sur la classification de liquides par signaux acoustiques. Je m'oriente aujourd'hui vers la recherche en nanoélectronique et en électronique à très basse consommation."
    ],
    keywords: ["Embedded Systems", "PCB Design", "Altium Designer", "Electronics", "Microelectronics", "Sensors", "Low Power", "R&D"],
    domains: ["Équipements de mesure et de contrôle", "IoT", "Systèmes embarqués", "Acoustique & traitement du signal", "Communication sans fil"],
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Russe", level: "B2" },
      { name: "Anglais", level: "B1" }
    ],
    image: { src: "assets/img/projets/smart-sensor-panel.webp", alt: "Panneau de PCB Smart Sensor fabriqué : trois cartes nues et une carte assemblée" }
  },

  /* Bandeau orange sous le Hero */
  highlights: ["PCB multicouches", "High-speed routing", "Impédance contrôlée", "Altium · KiCad · EasyEDA", "Ethernet · CAN · SPI · I²C", "BOM · Gerber · Assemblage", "IEEE Xplore 2025"],

  cv: {
    file: "assets/cv/CV-Jacques-Houndjetode.pdf", // déposez votre PDF à cet emplacement
    downloadName: "CV-Jacques-Houndjetode.pdf"
  }
};

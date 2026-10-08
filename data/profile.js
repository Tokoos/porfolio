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
      "Ingénieur électronicien maîtrisant le cycle complet de développement de cartes électroniques, du schéma de principe à la préparation de la production.",
    paragraphs: [
      "En deux ans, j'ai conçu des cartes PCB multicouches pour des équipements industriels de mesure et de contrôle, en assurant le routage à impédance contrôlée d'interfaces haute vitesse (Ethernet, CAN) ainsi que l'intégration matériel-logiciel en C/C++. Je prépare le dossier de production complet : Gerber, BOM, plan d'assemblage.",
      "Auteur d'une publication scientifique dans IEEE Xplore sur la classification acoustique de liquides à l'aide d'un modèle KAN, de l'expérimentation à la publication.",
      "Titulaire d'un Master de l'Université HSE (MIEM, micro- et nanoélectronique, 2026), avec une expérience de la simulation TCAD de transistors MOSFET sous Synopsys Sentaurus.",
      "Ingénieur trilingue (français / russe / anglais) avec une expérience de terrain en Afrique et en Russie, prêt à collaborer à distance avec des clients du monde entier."
    ],
    keywords: ["Embedded Systems", "PCB Design", "Altium Designer", "Hardware + Firmware", "Microelectronics", "TCAD", "Sensors", "Low Power", "R&D"],
    domains: ["Équipements de mesure et de contrôle", "IoT", "Systèmes embarqués", "Acoustique & traitement du signal", "Communication sans fil"],
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Russe", level: "B2 (avancé intermédiaire)" },
      { name: "Anglais", level: "B1 (intermédiaire)" }
    ],
    availability: [
      "Basé à Moscou (GMT+3) — flexible avec les fuseaux USA, Europe, Canada et Afrique",
      "Ouvert aux missions courtes et longues durées",
      "Disponible pour des déplacements professionnels",
      "Permis de conduire catégorie B"
    ],
    image: { src: "assets/img/projets/smart-sensor-panel.webp", alt: "Panneau de PCB Smart Sensor fabriqué : trois cartes nues et une carte assemblée" }
  },

  /* Bandeau orange sous le Hero */
  highlights: ["PCB multicouches", "High-speed routing", "Impédance contrôlée", "Altium · KiCad · EasyEDA", "Ethernet · CAN · SPI · I²C", "BOM · Gerber · Assemblage", "TCAD · Sentaurus", "IEEE Xplore 2025"],

  cv: {
    file: "assets/cv/CV-Jacques-Houndjetode.pdf", // déposez votre PDF à cet emplacement
    downloadName: "CV-Jacques-Houndjetode.pdf"
  }
};

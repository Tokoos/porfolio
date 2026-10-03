/* =====================================================================
   EXPÉRIENCE PROFESSIONNELLE
   ---------------------------------------------------------------------
   Champs : role, company, location, period, points (réalisations),
   tags (outils / compétences), projects (ids de projets liés, optionnel).
   ===================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.experience = [
  {
    role: "Ingénieur électronique",
    company: "FS Technologies",
    location: "Moscou, Russie",
    period: "Juil. 2025 — Juil. 2026",
    points: [
      "Conception de PCB multicouches pour des équipements de mesure et de contrôle, de la schématique jusqu'à la mise en production.",
      "Routage de lignes rapides (Ethernet, CAN) à impédance contrôlée.",
      "Préparation de la documentation de production complète (Gerber, BOM, plans d'assemblage), réduisant les allers-retours avec la fabrication.",
      "Intégration matériel / firmware via UART, SPI et I²C avec l'équipe logiciel embarqué."
    ],
    tags: ["Altium Designer", "KiCad", "EasyEDA"]
  },
  {
    role: "Ingénieur conception — stage de pré-diplôme",
    company: "HSE University, MIEM",
    location: "Moscou, Russie",
    period: "Févr. 2026 — Avr. 2026",
    points: [
      "Contribution à un projet de mémoire : système d'orientation par ondes sonores fondé sur l'effet Doppler, alternative à la navigation GPS.",
      "Conception et assemblage du matériel du banc de mesure acoustique ; développement du firmware microcontrôleur.",
      "Acquisition et analyse de signaux acoustiques pour localiser des sources de bruit par effet Doppler.",
      "Mémoire soutenu avec mention."
    ],
    tags: ["Acoustique", "Effet Doppler", "Firmware", "Traitement du signal"]
  },
  {
    role: "Projet académique — master",
    company: "HSE University",
    location: "Moscou, Russie",
    period: "Déc. 2024 — Nov. 2025",
    points: [
      "Réalisation d'un système de mesure acoustique à base d'Arduino et traitement numérique du signal.",
      "Constitution d'un jeu de données expérimental à partir de mesures acoustiques répétées sur cinq types de liquides.",
      "Développement d'un modèle KAN (Kolmogorov–Arnold Network) de classification des liquides — publié dans IEEE Xplore."
    ],
    tags: ["Arduino", "DSP", "Python", "KAN", "IEEE Xplore"]
  },
  {
    role: "Stagiaire projet",
    company: "Orange Digital Center",
    location: "Abidjan, Côte d'Ivoire",
    period: "Janv. 2023 — Août 2023",
    points: [
      "Développement du matériel d'une « canne intelligente » pour personnes malvoyantes, basée sur Raspberry Pi.",
      "Intégration de capteurs à ultrasons et mise en place d'un système de détection d'obstacles.",
      "Connexion de l'appareil à une application mobile compagnon ; tests et débogage."
    ],
    tags: ["Raspberry Pi", "Capteurs ultrasons", "Hardware debugging"]
  }
];

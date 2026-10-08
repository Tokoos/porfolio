/* =====================================================================
   EXPÉRIENCE PROFESSIONNELLE — d'après le CV (octobre 2026)
   ---------------------------------------------------------------------
   Champs : role, company, location, period, points (réalisations),
   tags (outils / compétences), projects (ids de projets liés, optionnel).
   ===================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.experience = [
  {
    role: "Ingénieur Électronicien",
    company: "FS Technologies",
    location: "Moscou, Russie",
    period: "Juil. 2025 — Juil. 2026",
    points: [
      "Conception de cartes électroniques multicouches pour des équipements de mesure et de contrôle, du schéma de principe jusqu'au transfert en production.",
      "Conception des schémas électriques et sélection des composants en tenant compte de leur disponibilité et de leur coût.",
      "Routage des lignes haute vitesse (Ethernet, CAN) avec contrôle d'impédance.",
      "Préparation du dossier de production complet (fichiers Gerber, BOM, plan d'assemblage), réduisant les allers-retours avec la production.",
      "Intégration du matériel et du logiciel via UART, SPI, I²C, en collaboration étroite avec l'équipe de développement embarqué."
    ],
    tags: ["Altium Designer", "KiCad", "EasyEDA"]
  },
  {
    role: "Ingénieur d'études — stage de fin d'études",
    company: "Université HSE, MIEM",
    location: "Moscou, Russie",
    period: "Févr. 2026 — Avr. 2026",
    points: [
      "Participation au projet de mémoire « Système d'orientation basé sur les ondes sonores et l'effet Doppler », une alternative au GPS.",
      "Analyse des systèmes de navigation acoustique existants ; conception et assemblage du banc de mesure matériel.",
      "Développement du firmware pour microcontrôleurs ; mise en place de la collecte, de l'échange et du stockage des données.",
      "Acquisition et analyse de signaux acoustiques pour localiser une source sonore à l'aide de l'effet Doppler.",
      "Soutenance du mémoire de fin d'études avec mention très bien."
    ],
    tags: ["Acoustique", "Effet Doppler", "Firmware", "Traitement du signal"]
  },
  {
    role: "Projet TCAD — transistor MOSFET à canal P (28 nm) à grille high-k/métal",
    company: "Université HSE, MIEM",
    location: "Moscou, Russie",
    period: "Sept. 2025 — Déc. 2025",
    points: [
      "Développement d'un modèle TCAD 2D d'un transistor MOSFET à canal P, technologie 28 nm (longueur physique de canal de 28 nm).",
      "Construction de la structure, des profils de dopage (source, drain, extensions LDD) et du maillage dans Sentaurus Structure Editor.",
      "Modélisation de l'empilement de grille SiO₂ / HfO₂ / TiN : épaisseur d'oxyde équivalente (EOT) de 2 nm, couche interfaciale SiO₂ de 1 nm.",
      "Simulation de la caractéristique de transfert I_D–V_G et évaluation de la tension drain-source maximale admissible (tenue en tension d'au moins 10 V) avec Sentaurus Device."
    ],
    tags: ["Synopsys Sentaurus TCAD", "SDE", "SDevice", "SVisual", "MOSFET 28 nm", "High-k / métal"]
  },
  {
    role: "Projet académique — projet obligatoire du cursus de Master",
    company: "Université HSE",
    location: "Moscou, Russie",
    period: "Déc. 2024 — Nov. 2025",
    points: [
      "Développement d'un système de mesure acoustique à base d'Arduino et traitement numérique du signal (Raspberry Pi).",
      "Constitution d'un jeu de données expérimental à partir de mesures acoustiques répétées sur cinq types de liquides.",
      "Développement d'un modèle KAN (Kolmogorov–Arnold Network) pour la classification des liquides.",
      "Publication des résultats de recherche dans IEEE Xplore."
    ],
    tags: ["Arduino", "Raspberry Pi", "DSP", "Python", "KAN", "IEEE Xplore"]
  },
  {
    role: "Stagiaire projet",
    company: "Orange",
    location: "Abidjan, Côte d'Ivoire",
    period: "Janv. 2023 — Août 2023",
    points: [
      "Développement de la partie matérielle d'une « canne intelligente » pour personnes malvoyantes, à base de Raspberry Pi.",
      "Intégration de capteurs à ultrasons et mise en œuvre d'un système de détection d'obstacles.",
      "Interfaçage avec une application mobile ; tests et débogage du dispositif."
    ],
    tags: ["Raspberry Pi", "Capteurs ultrasons", "Débogage matériel"]
  }
];

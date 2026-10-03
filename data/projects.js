/* =====================================================================
   PROJETS — contenu réel issu de l'ancien portfolio GitHub
   ---------------------------------------------------------------------
   Champs principaux :
   - altiumViewerUrl  lien PUBLIC / lecture seule du Web Viewer Altium 365.
                      Vide = bouton masqué sur la carte et noté « bientôt » sur la page projet.
                      Ne jamais y mettre d'identifiant ni de lien privé.
   - cover            image principale (cartes + en-tête de la page projet)
   - gallery          [{ src, caption }] — images affichées avec zoom
   - files            [{ label, href }] — documents téléchargeables (plans, PDF…)
   - Un projet sans image affiche une fiche technique typographique (aucune image inventée).
   ===================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.projectCategories = [
  { id: "all", label: "Tous" },
  { id: "pcb", label: "PCB Design" },
  { id: "embedded", label: "Embedded Systems" },
  { id: "sensors", label: "Sensors" },
  { id: "iot", label: "IoT" },
  { id: "industrial", label: "Industrial" }
];

PORTFOLIO.projects = [
  {
    id: "fire-detection",
    number: "01",
    featured: true,
    title: "Système de détection et d'alerte incendie",
    category: "IoT · Sensors · PCB",
    categories: ["iot", "sensors", "pcb", "embedded"],
    context: "Projet personnel",
    summary:
      "Système intelligent et autonome de détection incendie conçu pour réduire les fausses alertes et accélérer l'intervention des sapeurs-pompiers, avec coordonnées GPS exactes.",
    description: [
      "Grâce à plusieurs étapes de vérification par les propriétaires, la plateforme transmet automatiquement une alerte fiable accompagnée des coordonnées GPS exactes du lieu concerné.",
      "La solution vise à faire gagner un temps précieux aux secours, améliorer la précision des interventions et renforcer la sécurité des habitations, entreprises et institutions. Elle est particulièrement pensée pour l'Afrique, où chaque minute peut sauver des vies."
    ],
    role: "Conception matérielle complète sur Altium Designer : schéma, PCB 2 couches, impédance des pistes GPS",
    technologies: ["Altium Designer", "ESP32", "LoRa", "GPS", "MQ2", "PCB 2 couches"],
    hardware: [
      { name: "Seeed Studio ESP32", role: "Microcontrôleur principal, traitement et connectivité" },
      { name: "LoRa (module 02)", role: "Transmission longue portée, faible consommation" },
      { name: "MQ2", role: "Capteur de gaz / fumée pour la détection incendie" },
      { name: "GPS", role: "Localisation précise du lieu concerné" }
    ],
    steps: [
      "Le capteur MQ2 détecte une concentration anormale de fumée ou de gaz.",
      "Le système déclenche une phase de vérification auprès du propriétaire, pour limiter les fausses alertes.",
      "Si l'incendie est confirmé, une alerte est transmise via LoRa.",
      "Les coordonnées GPS exactes sont jointes à l'alerte.",
      "Les sapeurs-pompiers reçoivent une notification fiable et localisée."
    ],
    pcb: [
      { label: "Couches", value: "2" },
      { label: "Impédance", value: "Contrôlée sur pistes critiques" },
      { label: "Module GPS", value: "Intégré sur la carte" }
    ],
    technical: [
      "Calcul et respect de l'impédance caractéristique des pistes, adaptée à la fréquence du module GPS.",
      "Placement optimisé du module GPS pour limiter les interférences.",
      "Plan de masse dédié pour améliorer la qualité du signal.",
      "Routage 2 couches optimisé pour un compromis coût / performance."
    ],
    highlights: [
      "Autonome et basse consommation (LoRa + ESP32)",
      "Réduction des fausses alertes grâce à la vérification multi-étapes",
      "Localisation GPS précise incluse dans chaque alerte",
      "Solution adaptée aux contextes à infrastructure limitée"
    ],
    applications: [],
    altiumViewerUrl: "",
    cover: "assets/img/projets/fire-detection-3d.webp",
    gallery: [
      { src: "assets/img/projets/fire-detection-photo.webp", caption: "Cartes fabriquées et assemblées" },
      { src: "assets/img/projets/fire-detection-top.webp", caption: "Vue de dessus — Altium Designer" },
      { src: "assets/img/projets/fire-detection-3d.webp", caption: "Rendu 3D — Altium Designer" }
    ],
    files: []
  },
  {
    id: "esp32-type-c",
    number: "02",
    title: "ESP32 Type-C — carte de développement",
    category: "PCB · IoT",
    categories: ["pcb", "iot", "embedded"],
    context: "Projet personnel",
    summary:
      "Carte de développement basée sur l'ESP32, équipée d'un port USB Type-C pour une alimentation et une programmation rapides et pratiques.",
    description: [
      "L'ESP32 intègre le Wi-Fi et le Bluetooth, ce qui permet de créer facilement des projets connectés : systèmes de sécurité, domotique, surveillance et objets intelligents (IoT).",
      "Grâce à sa puissance, sa faible consommation d'énergie et ses nombreuses entrées/sorties, cette carte est idéale pour développer des solutions IoT modernes, fiables et économiques."
    ],
    role: "Conception du schéma et du PCB sur Altium Designer, fichiers de production (Gerber, BOM, plan d'assemblage)",
    technologies: ["Altium Designer", "ESP32", "USB Type-C", "Wi-Fi", "Bluetooth"],
    hardware: [
      { name: "ESP32", role: "Microcontrôleur — Wi-Fi + Bluetooth" },
      { name: "USB Type-C", role: "Alimentation et programmation" }
    ],
    steps: [],
    pcb: [
      { label: "Microcontrôleur", value: "ESP32" },
      { label: "Connectivité", value: "Wi-Fi + Bluetooth" },
      { label: "Alimentation", value: "USB Type-C" },
      { label: "Production", value: "Gerber, BOM, plan d'assemblage" }
    ],
    technical: [],
    highlights: ["Faible consommation", "Nombreuses entrées/sorties disponibles", "Alimentation et programmation par USB Type-C"],
    applications: ["Systèmes de sécurité", "Domotique", "Surveillance", "Objets intelligents (IoT)"],
    altiumViewerUrl: "",
    cover: "assets/img/projets/esp32-typec-3d.webp",
    gallery: [
      { src: "assets/img/projets/esp32-typec.webp", caption: "Vue de dessus et rendu 3D — Altium Designer" },
      { src: "assets/img/projets/esp32-typec-3d.webp", caption: "Rendu 3D" },
      { src: "assets/img/projets/esp32-typec-top.webp", caption: "Vue de dessus" }
    ],
    files: []
  },
  {
    id: "usb-quadrature-decoder",
    number: "03",
    title: "Décodeur USB pour encodeurs en quadrature",
    category: "PCB · Embedded · Industrial",
    categories: ["pcb", "embedded", "industrial"],
    context: "Projet",
    summary:
      "Carte compacte qui lit la position, la vitesse et le sens de rotation d'encodeurs en quadrature, puis transmet les données à un PC en temps réel via USB.",
    description: [
      "La carte réceptionne les signaux bruts des encodeurs (canaux A et B) et les conditionne via des filtres anti-rebond et une isolation galvanique optionnelle, pour les immuniser contre les parasites et les surtensions industrielles."
    ],
    role: "Conception matérielle complète sur Altium Designer : schéma, routage, contrôle d'impédance 100 Ω",
    technologies: ["Altium Designer", "STM32F103", "FT232RQ", "USB", "Impédance 100 Ω"],
    hardware: [
      { name: "STM32F103T8U6", role: "Microcontrôleur principal — traitement des signaux en quadrature" },
      { name: "FT232RQ", role: "Convertisseur USB vers UART pour la communication avec le PC" },
      { name: "USBLC6-2SC6", role: "Protection ESD sur la ligne USB" },
      { name: "USB4085-GF-A", role: "Connecteur USB" }
    ],
    steps: [
      "Réception des signaux en quadrature bruts (canaux A et B) issus de l'encodeur.",
      "Conditionnement du signal via des filtres anti-rebond.",
      "Isolation galvanique optionnelle contre les parasites et surtensions industrielles.",
      "Décodage de la position, de la vitesse et du sens de rotation par le STM32F103T8U6.",
      "Transmission des données au PC en temps réel via USB (FT232RQ)."
    ],
    pcb: [
      { label: "Impédance", value: "100 Ω sur les lignes critiques" },
      { label: "Interface", value: "USB (via FT232RQ)" },
      { label: "Protection", value: "ESD (USBLC6-2SC6) + isolation galvanique optionnelle" }
    ],
    technical: [],
    highlights: [
      "Lecture précise de la position, de la vitesse et du sens de rotation",
      "Protection contre les parasites et surtensions",
      "Communication USB temps réel avec le PC",
      "Conçu pour les environnements industriels"
    ],
    applications: [],
    altiumViewerUrl: "",
    cover: "assets/img/projets/encoder-decoder.webp",
    gallery: [
      { src: "assets/img/projets/encoder-decoder.webp", caption: "Rendu 3D — Altium Designer" },
      { src: "assets/img/projets/encoder-decoder-assembly.webp", caption: "Plan d'assemblage" }
    ],
    files: [{ label: "Plan d'assemblage (PDF)", href: "assets/img/projets/encoder-decoder-plan-assemblage.pdf" }]
  },
  {
    id: "smart-sensor",
    number: "04",
    title: "Smart Sensor",
    category: "Sensors · IoT · PCB",
    categories: ["sensors", "iot", "pcb"],
    context: "Projet",
    todo: true,
    summary:
      "Carte capteur circulaire à module ESP32, avec connecteurs pour capteur de gaz MQ2 et DHT11, buzzer, boutons BOOT/EN et interface UART. Prototype fabriqué en panneau.",
    description: [
      "[À compléter] Ce projet n'avait pas de description dans l'ancien portfolio. Le texte ci-dessus résume uniquement ce que montrent les rendus 3D et les photos de fabrication."
    ],
    role: "[À compléter]",
    technologies: ["Altium Designer", "ESP32", "MQ2", "DHT11", "UART"],
    hardware: [],
    steps: [],
    pcb: [{ label: "Forme", value: "Circulaire" }, { label: "Fabrication", value: "Panneau de 4 cartes" }],
    technical: [],
    highlights: [],
    applications: [],
    altiumViewerUrl: "",
    cover: "assets/img/projets/smart-sensor-3d-b.webp",
    gallery: [
      { src: "assets/img/projets/smart-sensor-top.webp", caption: "Vue de dessus — Altium Designer" },
      { src: "assets/img/projets/smart-sensor-3d-b.webp", caption: "Rendu 3D" },
      { src: "assets/img/projets/smart-sensor-3d-a.webp", caption: "Rendu 3D — perspective" },
      { src: "assets/img/projets/smart-sensor-panel.webp", caption: "Panneau fabriqué : cartes nues et carte assemblée" }
    ],
    files: []
  },
  {
    id: "nfc-module",
    number: "05",
    title: "Module NFC",
    category: "PCB · RF · IoT",
    categories: ["pcb", "iot"],
    context: "Projet",
    summary:
      "Module NFC pour la lecture, l'écriture et l'échange de données sans contact avec des cartes, badges, smartphones ou tags, facile à intégrer avec un ESP32.",
    description: [
      "Le module NFC (Near Field Communication) permet la communication sans fil à courte distance entre appareils compatibles. Il s'intègre facilement avec des microcontrôleurs comme l'ESP32."
    ],
    role: "Conception du schéma et du PCB sur Altium Designer, antenne NFC intégrée au circuit imprimé",
    technologies: ["Altium Designer", "NFC", "Antenne PCB", "ESP32"],
    hardware: [
      { name: "Module NFC", role: "Lecture / écriture de données sans contact" },
      { name: "ESP32", role: "Microcontrôleur, traitement et connectivité" }
    ],
    steps: [
      "Le module NFC détecte la présence d'un tag, d'une carte ou d'un smartphone à proximité.",
      "La communication sans fil courte distance s'établit.",
      "Les données sont lues ou écrites sur le support NFC.",
      "Les informations sont transmises à l'ESP32 pour traitement (validation d'accès, identification…)."
    ],
    pcb: [{ label: "Antenne", value: "Intégrée au PCB" }],
    technical: [],
    highlights: [
      "Communication rapide et sans contact",
      "Intégration simple avec microcontrôleurs (ESP32)",
      "Adapté aux applications de sécurité et d'identification",
      "Compatible cartes, badges, smartphones et tags NFC"
    ],
    applications: ["Systèmes de sécurité", "Contrôle d'accès", "Identification", "Paiement sans contact", "Solutions IoT"],
    altiumViewerUrl: "",
    cover: "assets/img/projets/nfc-module.webp",
    gallery: [{ src: "assets/img/projets/nfc-module.webp", caption: "Rendu 3D — Altium Designer" }],
    files: []
  },
  {
    id: "industrial-controller",
    number: "06",
    title: "Carte de commande d'engins industriels",
    category: "Industrial · Embedded",
    categories: ["industrial", "embedded", "pcb"],
    context: "Expérience professionnelle",
    summary:
      "Carte de pilotage et de supervision d'engins industriels lourds, avec affichage local sur écran TFT et communication sans fil longue portée LoRa.",
    description: [
      "Cette carte permet de piloter et superviser des engins industriels via une interface embarquée, avec affichage local et communication sans fil longue portée pour le suivi et la transmission de données."
    ],
    role: "Conception matérielle complète sur Altium Designer : schéma, routage, contrôle d'impédance",
    technologies: ["Altium Designer", "ESP32", "LoRa", "TFT", "UART · I²C · USB"],
    hardware: [
      { name: "ESP32", role: "Microcontrôleur principal — traitement et connectivité" },
      { name: "LoRa", role: "Transmission longue portée, faible consommation" },
      { name: "Écran TFT", role: "Interface d'affichage et de contrôle local" }
    ],
    comms: [
      { name: "UART", role: "Communication série avec périphériques / modules" },
      { name: "I²C", role: "Interfaçage avec capteurs et écran TFT" },
      { name: "USB", role: "Programmation, débogage et alimentation" }
    ],
    steps: [
      "Acquisition et traitement des données de l'engin industriel via l'ESP32.",
      "Communication avec les périphériques via UART et I²C.",
      "Affichage des informations en temps réel sur l'écran TFT.",
      "Transmission des données à distance via LoRa.",
      "Programmation et débogage de la carte via USB.",
      "Contrôle et supervision du fonctionnement de l'engin."
    ],
    pcb: [
      { label: "Couches", value: "2 et 4 (selon version)" },
      { label: "Impédance", value: "Contrôlée sur pistes critiques" },
      { label: "Production", value: "BOM, dessin technique, Gerber" }
    ],
    technical: [],
    highlights: [
      "Interface locale via écran TFT pour un contrôle direct",
      "Communication longue portée grâce au module LoRa",
      "Communications filaires robustes (UART, I²C, USB)",
      "Conçue pour des environnements industriels exigeants"
    ],
    applications: ["Contrôle d'engins industriels lourds", "Supervision d'équipements de chantier", "Télémétrie industrielle", "IoT pour environnements robustes"],
    altiumViewerUrl: "",
    cover: "",
    specs: ["ESP32", "LoRa", "TFT", "2–4 couches"],
    gallery: [],
    files: []
  },
  {
    id: "can-uart-interface",
    number: "07",
    title: "Carte d'interfaçage CAN / UART",
    category: "Industrial · Embedded",
    categories: ["industrial", "embedded", "pcb"],
    context: "Expérience professionnelle",
    summary:
      "Carte d'acquisition et de traitement de données via CAN et UART, pour l'intégration dans des systèmes industriels nécessitant une communication fiable.",
    description: [
      "Cette carte assure l'acquisition et le traitement de données via les interfaces CAN et UART, permettant son intégration dans des systèmes industriels nécessitant une communication fiable avec d'autres équipements ou modules."
    ],
    role: "Conception matérielle complète sur Altium Designer : schéma, routage 2 couches, dossier de production",
    technologies: ["Altium Designer", "CAN", "UART", "PCB 2 couches"],
    hardware: [{ name: "Microcontrôleur", role: "Traitement des données et gestion des communications" }],
    comms: [
      { name: "CAN", role: "Communication avec d'autres équipements industriels (bus terrain)" },
      { name: "UART", role: "Communication série avec périphériques / modules" }
    ],
    steps: [
      "Acquisition des données via les interfaces disponibles.",
      "Traitement embarqué des informations.",
      "Transmission des données via CAN et/ou UART vers les autres équipements du système."
    ],
    pcb: [
      { label: "Couches", value: "2" },
      { label: "Production", value: "BOM, plan d'assemblage, Gerber" }
    ],
    technical: [],
    highlights: ["Double interface CAN + UART pour une intégration flexible", "Conçue pour environnements industriels", "Architecture compacte en 2 couches"],
    applications: ["Bus CAN industriels", "Interfaçage avec équipements de mesure et de contrôle", "Solutions embarquées industrielles"],
    altiumViewerUrl: "",
    cover: "",
    specs: ["CAN", "UART", "2 couches"],
    gallery: [],
    files: []
  },
  {
    id: "radar-detection",
    number: "08",
    title: "Carte de détection d'objets par radar",
    category: "Sensors · Industrial",
    categories: ["sensors", "industrial", "embedded", "pcb"],
    context: "Expérience professionnelle",
    summary:
      "Carte de détection de présence, de distance et de mouvement d'objets par module radar, avec traitement embarqué sur ESP32.",
    description: [
      "Cette carte détecte la présence, la distance et/ou le mouvement d'objets à l'aide d'un capteur radar, avec traitement embarqué des données par un microcontrôleur ESP32."
    ],
    role: "Conception matérielle complète sur Altium Designer : schéma, routage 2 couches, dossier de production",
    technologies: ["Altium Designer", "ESP32", "Radar", "UART"],
    hardware: [
      { name: "ESP32", role: "Microcontrôleur principal — traitement et connectivité" },
      { name: "Module radar", role: "Détection de présence, distance et/ou mouvement" }
    ],
    comms: [{ name: "UART", role: "Communication série entre le module radar et l'ESP32" }],
    steps: [
      "Le module radar émet un signal et détecte les objets à proximité.",
      "Les données brutes sont transmises à l'ESP32 via UART.",
      "L'ESP32 traite les données (distance, présence, mouvement).",
      "Les résultats sont exploités par l'application cible (alerte, comptage, sécurité…)."
    ],
    pcb: [
      { label: "Couches", value: "2" },
      { label: "Production", value: "BOM, plan d'assemblage, Gerber" }
    ],
    technical: [],
    highlights: ["Détection fiable d'objets à distance", "Communication simple et robuste via UART", "Architecture compacte basée sur ESP32", "Adaptée aux applications industrielles"],
    applications: ["Détection d'objets ou d'obstacles", "Sécurité industrielle", "Comptage ou suivi de présence", "Automatisation et supervision d'équipements"],
    altiumViewerUrl: "",
    cover: "",
    specs: ["ESP32", "Radar", "UART", "2 couches"],
    gallery: [],
    files: []
  }
  ,
  {
    id: "stm32-control-platform",
    number: "09",
    title: "Plateforme de contrôle et d'acquisition STM32",
    category: "Embedded · PCB · Industrial",
    categories: ["embedded", "pcb", "industrial"],
    context: "Projet",
    summary:
      "Carte multifonction pour le contrôle de systèmes embarqués, le pilotage de moteurs et l'acquisition de signaux analogiques, autour de microcontrôleurs STM32.",
    description: [
      "Conception d'une carte électronique multifonction destinée au contrôle de systèmes embarqués, au pilotage de moteurs et à l'acquisition de signaux analogiques. Le projet s'appuie sur plusieurs blocs fonctionnels autour de microcontrôleurs STM32 et intègre différentes interfaces de communication, d'acquisition et de commande.",
      "Le développement est réalisé sous Altium Designer, avec une approche modulaire qui sépare les différentes fonctions électroniques pour faciliter la conception, le routage, la validation et l'évolution du système."
    ],
    role: "Conception sous Altium Designer : architecture modulaire, schéma, routage, gestion des composants avec ActiveBOM",
    technologies: ["Altium Designer", "STM32F407", "STM32F103", "Ethernet", "CH340C", "ADC · DAC", "ActiveBOM"],
    hardware: [
      { name: "STM32F407 / STM32F103", role: "Traitement et contrôle du système" },
      { name: "PHY Ethernet", role: "Interface réseau dédiée" },
      { name: "Driver moteur", role: "Pilotage d'actionneurs" },
      { name: "CH340C", role: "Interface USB / UART avec un ordinateur" },
      { name: "ADC", role: "Acquisition de signaux analogiques" },
      { name: "DAC + interface microphone", role: "Génération et acquisition de signaux" }
    ],
    comms: [
      { name: "Ethernet", role: "Communication réseau" },
      { name: "USB / UART", role: "Liaison PC via CH340C" }
    ],
    steps: [],
    pcb: [
      { label: "Microcontrôleurs", value: "STM32F407 + STM32F103" },
      { label: "Alimentation", value: "Entrée dédiée et rails de tension régulés" },
      { label: "Composants", value: "Gestion et suivi via ActiveBOM" },
      { label: "Approche", value: "Modulaire, par blocs fonctionnels" }
    ],
    technical: [],
    highlights: [
      "Architecture modulaire : chaque fonction électronique isolée dans son bloc",
      "Contrôle, commande moteur et acquisition réunis sur une seule carte",
      "Communication réseau (Ethernet) et liaison PC (USB/UART)",
      "Chaîne de signal complète : ADC, DAC et entrée microphone"
    ],
    applications: [],
    altiumViewerUrl: "",
    cover: "assets/img/projets/stm32-platform-3d.webp",
    gallery: [
      { src: "assets/img/projets/stm32-platform-3d.webp", caption: "Rendu 3D — Altium Designer" },
      { src: "assets/img/projets/stm32-platform-top.webp", caption: "Vue de dessus — Altium Designer" }
    ],
    files: []
  }
];

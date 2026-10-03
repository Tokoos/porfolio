/* =====================================================================
   SKILLS
   ---------------------------------------------------------------------
   Une compétence = une chaîne, ou un objet :
     { name: "Altium Designer", icon: "altiumdesigner", core: true }
   - icon : nom d'un fichier de assets/img/icons/ (logos Simple Icons, CC0).
            Sans icône, un petit symbole générique est affiché.
   - core : met la compétence en évidence (compétence principale).
   `research: true` sur une catégorie lui donne un style « recherche ».
   Pas de barres ni de pourcentages.
   ===================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.skills = [
  {
    id: "pcb",
    title: "PCB Design",
    items: [
      { name: "Altium Designer", icon: "altiumdesigner", core: true },
      { name: "KiCad", icon: "kicad" },
      { name: "EasyEDA", icon: "easyeda" },
      "Proteus",
      "Schematic Design",
      "PCB Layout",
      "PCB Design",
      "Design Rules",
      "High-Speed Routing",
      "Controlled Impedance",
      "Gerber",
      "BOM",
      "Assembly Drawings"
    ]
  },
  {
    id: "interfaces",
    title: "Interfaces & Protocols",
    items: [
      "UART", "SPI", "I²C", "CAN", "Ethernet", "USB", "I²S", "LoRa", "LoRaWAN", "HTTP",
      "Wi-Fi",
      { name: "Bluetooth", icon: "bluetooth" },
      { name: "NFC", icon: "nfc" },
      "GPS"
    ]
  },
  {
    id: "electronics",
    title: "Electronics & Hardware",
    items: [
      "Analog Electronics", "Digital Electronics", "Power Electronics", "Sensors", "Instrumentation",
      "Microcontrollers", "Hardware Debugging", "Hardware Prototyping", "ESD Protection",
      "Signal Processing (DSP)", "Acoustic Measurement", "Ultrasonic Sensors", "Radar"
    ]
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    items: [
      { name: "STM32", icon: "stmicroelectronics" },
      { name: "Arduino", icon: "arduino" },
      { name: "ESP32", icon: "espressif" },
      { name: "Raspberry Pi", icon: "raspberrypi" },
      "Orange Pi",
      "Embedded C/C++",
      "Firmware",
      "Real-Time Systems"
    ]
  },
  {
    id: "tools",
    title: "Programming & Tools",
    items: [
      { name: "Python", icon: "python" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
      "MATLAB / Simulink",
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "PlatformIO", icon: "platformio" },
      { name: "LTspice", icon: "ltspice" }
    ]
  },
  {
    id: "cad",
    title: "3D Modeling & CAD",
    items: [
      { name: "Fusion 360", icon: "autodesk" },
      "3D PCB Modeling",
      "Mechanical Enclosure Design",
      "STEP",
      "STL"
    ]
  },
  {
    id: "nano",
    title: "Micro / Nanoelectronics",
    research: true,
    items: [
      "Microelectronics", "Nanoelectronics", "Low-Power Electronics", "TFET", "Analog Circuits",
      "Memristors", "Edge AI", "Neuromorphic Computing", "KAN (Kolmogorov–Arnold Networks)", "Photonics"
    ]
  }
];

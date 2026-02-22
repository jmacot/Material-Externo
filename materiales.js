// ─────────────────────────────────────────────────────────────────────────────
// CATÁLOGO DE MATERIALES POR CASA COMERCIAL
//
// Formato de cada material:
//   { "n": "NOMBRE EN CHIP",  "d": "DESCRIPCIÓN COMPLETA EN INFORME PDF" }
//
// Si no hay descripción adicional, n y d pueden ser iguales.
// Lo que va entre paréntesis en "d" solo aparece en el informe final.
// ─────────────────────────────────────────────────────────────────────────────

const CATALOGO = {

  "ARTHREX": [
    { "n": "FIBERSTITCH",       "d": "FIBERSTITCH (ALL-INSIDE MENISCUS REPAIR)" },
    { "n": "FIBERTAPE",         "d": "FIBERTAPE (INTERNALBRACE)" },
    { "n": "FLIPCUTTER III",    "d": "FLIPCUTTER III (BROCA RETRÓGRADA)" },
    { "n": "SCORPION",          "d": "SCORPION (KNEE SUTURE PASSER)" },
    { "n": "SPEEDBRIDGE",       "d": "SPEEDBRIDGE (REPARACIÓN TENDÓN DE AQUILES)" },
    { "n": "SWIVELOCK ANCHORS", "d": "SWIVELOCK ANCHORS" },
    { "n": "ZONENAVIGATOR",    "d": "ZONENAVIGATOR (SISTEMA DE REPARACIÓN MENISCAL DENTRO-FUERA)" }
  ],

  "MBA SURGICAL EMPOWERMENT": [
    { "n": "PLACA CLAVÍCULA TIPO GANCHO", "d": "PLACA PARA CLAVÍCULA TIPO GANCHO" },
    { "n": "ACS",                        "d": "ACS (SISTEMA DE RODILLA DE REVISIÓN CON PLATAFORMA TIBIAL MÓVIL Y RECUBRIMIENTO DE TIN)" }
  ],

  "NEWCLIP": [
    { "n": "EXPERT WRIST",   "d": "EXPERT WRIST (DISTAL RADIUS AND ULNA PLATES)" },
    { "n": "EXPERT KNEE",    "d": "EXPERT KNEE (ANATOMICAL PLATES TO PLATEAU FRACTURES)" },
    { "n": "ALIANS ELBOW",   "d": "ALIANS ELBOW (DISTAL HUMERUS & OLECRANON)" },
    { "n": "ACTIVMOTION S",  "d": "ACTIVMOTION S (HIGH TIBIAL & DISTAL FEMORAL OSTEOTOMY PLATES)" }
  ],

  "PALEX": [
    { "n": "EVOLUTION",  "d": "EVOLUTION (PRÓTESIS DE RODILLA DE PIVOTE MEDIAL)" },
    { "n": "PIXIE KNEE", "d": "PIXIE KNEE" },
    { "n": "BPK-S",      "d": "BPK-S (SISTEMA DE REVISIÓN DE PTR)" }
  ],

  "SMITH & NEPHEW": [
    { "n": "TRIGEN HUMERAL NAIL", "d": "TRIGEN HUMERAL NAIL SYSTEM" },
    { "n": "EVOS SMALL",          "d": "EVOS SMALL PLATING SYSTEM" },
    { "n": "EVOS LARGE",          "d": "EVOS LARGE & PERIPROSTHETIC PLATING SYSTEM" }
  ],

  "STRYKER": [
  ],

  "SYNTHES": [
    { "n": "TFNA",             "d": "TFNA (SISTEMA DE CLAVOS FEMORALES PROXIMALES)" },
    { "n": "RFN-ADVANCED",     "d": "RFN-ADVANCED (SISTEMA DE CLAVO FEMORAL RETRÓGRADO)" },
    { "n": "PHILOS",           "d": "PHILOS Y PHILOS LARGO (SISTEMA ANATÓMICO DE OSTEOSÍNTESIS PARA EL HÚMERO PROXIMAL)" },
    { "n": "PLACA VA-LCP 3.5", "d": "PLACA VA-LCP 3.5 PARA TIBIA PROXIMAL" },
    { "n": "PLACA CLAVICULAR", "d": "PLACA CLAVICULAR LCP CON GANCHO" },
    { "n": "RIA",              "d": "RIA (RIAMAGINE AUTOGRAFTING, REAMING, AND INFECTION CONTROL)" }
  ],

  "ZIMMER BIOMET": [
    { "n": "NCB",           "d": "NCB (PERIPROSTHETIC FEMUR PLATE SYSTEM)" },
    { "n": "VANGUARD 360", "d": "VANGUARD 360 (SISTEMA DE REVISIÓN DE PTR)" }
  ]

};

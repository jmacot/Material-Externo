# 🔩 Solicitud de Material Externo

Formulario web de archivo unico para generar solicitudes de material quirurgico externo en Cirugia Ortopedica y Traumatologia. Seleccion visual de casa comercial, catalogo de materiales, generacion de PDF y envio por correo.

![HTML5](https://img.shields.io/badge/HTML5-single--file-E34F26?logo=html5&logoColor=white)
![Proveedores](https://img.shields.io/badge/proveedores-8-1a3a5c)
![Sin dependencias](https://img.shields.io/badge/dependencias-ninguna-grey)

---

## Acceso directo

[Abrir formulario](https://jmacot.github.io/Material-Externo/)

No requiere instalacion. Funciona en cualquier navegador, incluyendo movil y tablet.

---

## Funcionalidades

- **Seleccion visual de proveedor** por logo (8 casas comerciales)
- **Catalogo de materiales** con chips de seleccion rapida por proveedor
- **Datos del paciente**: nombre, edad, sexo, numero de historia, fecha de intervencion
- **Medico solicitante** con numero de colegiado (se guarda en localStorage)
- **Vista previa del informe** antes de generar el PDF
- **Generacion de PDF** con cabecera corporativa, datos del paciente, materiales solicitados y firma
- **Bloques de material multiples**: permite solicitar material de varios proveedores a la vez
- **Responsive**: adaptado para uso en escritorio y movil

---

## Casas comerciales incluidas

| Proveedor | Materiales |
|-----------|-----------|
| Arthrex | FiberStitch, FiberTape, FlipCutter III, Scorpion, SwiveLock |
| MBA Surgical | Placa clavicula tipo gancho |
| NewClip | Expert Wrist, Expert Knee, Alians Elbow, ActivMotion S |
| Palex | Clipeo Retorno, Mini Tightrope, Boton cortical |
| Smith & Nephew | Versafix, Peri-Loc, Trigen, Redapt |
| Stryker | Variax, AxSOS |
| Synthes | LCP, PFNA, Expert Tibial Nail, Expert Humeral Nail |
| Zimmer Biomet | NCB Periprosthetic, Persona, Oxford |

---

## Como usar

1. Rellena los **datos del paciente** (nombre, edad, sexo, NHC, fecha)
2. Pulsa **+ Anadir material** para crear un bloque
3. Selecciona la **casa comercial** por su logo
4. Elige los **materiales** del catalogo (chips)
5. Selecciona el **medico solicitante** y su numero de colegiado
6. Pulsa **Ver informe** para previsualizar
7. Pulsa **Descargar PDF** para guardar el documento

---

## Estructura del proyecto

```
Material-Externo/
├── index.html        ← aplicacion principal
├── materiales.js     ← catalogo de materiales por proveedor
├── icon.png          ← icono de la app (+ variantes de tamano)
├── LICENSE           ← MIT
└── README.md         ← este archivo
```

---

## Tecnologia

- **HTML5 + CSS3 + JavaScript vanilla** en archivo unico
- **jsPDF + html2canvas** (CDN) para generacion de PDF
- Tipografia: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- Sin frameworks, sin build tools, sin backend
- Compatible con Chrome, Firefox, Safari, Edge

---

## Licencia

MIT — Uso interno hospitalario.

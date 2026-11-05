# EBO — Extracción Bibliográfica y Organizacional

Aplicación web (PWA) que extrae con OCR los datos de portadas de libros y
documentos, permite asignarlos a campos y los exporta a Excel. Todo corre en
el navegador.

Sitio: https://jcbarbog.github.io/EBO/

Tiene las mismas funciones que
[EBO-Biblioteca.Cliente](https://github.com/JCBarboG/EBO-Biblioteca.Cliente)
(OCR por zonas, tabla editable, columnas propias, puntuación por columna,
historial de paquetes, personalización de colores, guía de uso, español e
inglés), con una diferencia: la tabla de Excel usa estas columnas, en este
orden, para todos los tipos de documento:

| # | Columna |
|---|---------|
| 1 | id (se numera sola si se deja vacía) |
| 2 | CLASIFICACION |
| 3 | IDIOMA |
| 4 | AÑO EDICIÓN |
| 5 | TITULO |
| 6 | AUTOR |
| 7 | MATERIA |
| 8 | LUGAR Y CASA EDITORIAL |
| 9 | DESCRIPCIÓN FÍSICA |
| 10 | ISBN |
| 11 | EJEMPLARES |
| 12 | NOTA |

Las columnas se definen en `src/constants/docTypes.js`.

## Desarrollo

```bash
npm install      # también copia los assets de Tesseract a public/
npm run dev      # servidor local
npm run build    # compila a dist/
npm run deploy   # publica dist/ en la rama gh-pages (GitHub Pages)
```

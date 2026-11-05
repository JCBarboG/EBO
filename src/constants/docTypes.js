// Esquema de campos de EBO (versión general, no la del cliente).
// Todas las columnas y su orden siguen la tabla de Excel definida para este
// repositorio: id, CLASIFICACION, IDIOMA, AÑO EDICIÓN, TITULO, AUTOR,
// MATERIA, LUGAR Y CASA EDITORIAL, DESCRIPCIÓN FÍSICA, ISBN, EJEMPLARES, NOTA.
// No llevan etiqueta MARC: los encabezados del Excel salen tal cual.
// Los cinco tipos de documento usan las mismas columnas.
//
// La clave de la columna "id" es `registroId` porque cada fila ya usa `id`
// internamente (UUID) para editar y borrar filas.

function field(key, colEs, es, en, colEn = en.toUpperCase()) {
  return {
    key,
    marcTag: '',
    label: { es, en },
    fieldLabel: { es, en },
    colLabel: { es: colEs, en: colEn },
  };
}

export const EBO_CATEGORIES = [
  field('registroId', 'id', 'id', 'id', 'id'),
  field('clasificacion', 'CLASIFICACION', 'Clasificación', 'Classification'),
  field('idioma', 'IDIOMA', 'Idioma', 'Language'),
  field('anioEdicion', 'AÑO EDICIÓN', 'Año edición', 'Edition year'),
  field('titulo', 'TITULO', 'Título', 'Title'),
  field('autor', 'AUTOR', 'Autor', 'Author'),
  field('materia', 'MATERIA', 'Materia', 'Subject'),
  field('lugarEditorial', 'LUGAR Y CASA EDITORIAL', 'Lugar y casa editorial', 'Place and publisher'),
  field('descFisica', 'DESCRIPCIÓN FÍSICA', 'Descripción física', 'Physical description'),
  field('isbn', 'ISBN', 'ISBN', 'ISBN'),
  field('ejemplares', 'EJEMPLARES', 'Ejemplares', 'Copies'),
  field('nota', 'NOTA', 'Nota', 'Note'),
];

export const LIBRO_CATEGORIES = EBO_CATEGORIES;
export const REVISTA_CATEGORIES = EBO_CATEGORIES;
export const TESIS_CATEGORIES = EBO_CATEGORIES;
export const ARTICULO_REVISTA_CATEGORIES = EBO_CATEGORIES;
export const ARTICULOS_LIBRO_CATEGORIES = EBO_CATEGORIES;

export const CATEGORIES_BY_TYPE = {
  libro: LIBRO_CATEGORIES,
  revista: REVISTA_CATEGORIES,
  tesis: TESIS_CATEGORIES,
  articuloRevista: ARTICULO_REVISTA_CATEGORIES,
  articulosLibro: ARTICULOS_LIBRO_CATEGORIES,
};

export function emptyFieldsForType(type) {
  const cats = CATEGORIES_BY_TYPE[type] || LIBRO_CATEGORIES;
  return cats.reduce((acc, { key }) => { acc[key] = ''; return acc; }, {});
}

// Legacy export so existing imports of CATEGORIES / EMPTY_FIELDS still work
export const CATEGORIES = LIBRO_CATEGORIES;
export const EMPTY_FIELDS = emptyFieldsForType('libro');

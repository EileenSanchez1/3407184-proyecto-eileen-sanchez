// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
// Dominio: Sistema de Gestión de Restaurantes
// Categoría: Hotelería y Hospitalidad
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre del dominio asignado
const DOMAIN_NAME = "Restaurante El Sabor";

// Nombre de la entidad con espacios intencionales para usar trim()
const rawEntityName = "  Bandeja Paisa Tradicional  ";

// Categoría del plato dentro del menú
const entityCategory = "Plato Fuerte - Comida Típica";

// Código único del plato en el sistema del restaurante
const entityCode = "PLT-001";

// Descripción del plato con palabras clave del dominio
const entityDescription = "Plato típico colombiano con frijoles, chicharrón, carne molida, chorizo, arroz y aguacate. Disponible en el menú principal del restaurante.";

// Precio base del plato en pesos colombianos
const mainValue = 35_000;

// Estado de disponibilidad del plato
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// Limpiamos los espacios del nombre con trim()
const entityName = rawEntityName.trim();

// Nombre en mayúsculas para usar en el encabezado de la ficha
const entityNameUpper = entityName.toUpperCase();

// Nombre en minúsculas para referencias internas del sistema
const entityNameLower = entityName.toLowerCase();

// Extraemos el prefijo del código con slice() — primeras 3 letras
const codePrefix = entityCode.slice(0, 3);

// Reemplazamos el guion del código por un espacio para mostrarlo legible
const entityCodeFormatted = entityCode.replace("-", " — ");


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// Verificamos si el código empieza con el prefijo correcto de plato
const hasValidPrefix = entityCode.startsWith("PLT");

// Verificamos si la descripción menciona la palabra "restaurante"
const descriptionIsRelevant = entityDescription.includes("restaurante");

// Verificamos si el código termina con los dígitos "001"
const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

// Separadores generados con repeat() — método de string
const separator    = "=".repeat(45);
const subSeparator = "-".repeat(45);

// Ficha multilínea construida con template literals — sin concatenación con +
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE PLATO
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCodeFormatted}
Prefijo:     ${codePrefix}
Precio:      $${mainValue} COP
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

// Mostramos los resultados de las validaciones con template literals
console.log(`¿Código empieza con '${codePrefix}'?:        ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'restaurante'?:  ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?:            ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

// Mensaje corto de una línea con template literal — tipo alerta del sistema
const notification = `📢 Nuevo plato disponible: ${entityName} (${entityCode}) — $${mainValue} COP`;
console.log(notification);
console.log("");

// Mensaje adicional usando toLowerCase() en la notificación interna del sistema
const systemLog = `[SISTEMA] plato registrado: ${entityNameLower} | código: ${entityCode}`;
console.log(systemLog);
console.log("");

console.log(separator);
console.log("  FIN DEL GENERADOR DE MENSAJES");
console.log(separator);
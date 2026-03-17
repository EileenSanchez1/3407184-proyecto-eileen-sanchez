// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
// Dominio: Sistema de Gestión de Restaurantes
// Categoría: Hotelería y Hospitalidad
// ============================================


// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// Nombre del plato registrado en el sistema del restaurante
const elementName = "Bandeja Paisa Tradicional";

// Estado actual del plato en el sistema
const elementStatus = "active";

// Número de unidades vendidas hoy — para clasificar la demanda
const elementValue = 42;

// Tipo o categoría del plato dentro del menú
const elementType = "main-course";

// Objeto con información adicional opcional del plato (puede ser null)
const elementInfo = {
  detail: "Incluye frijoles, chicharrón, carne molida y chorizo",
  origin: "Antioquia, Colombia",
  chef: "Chef Ramírez"
};


// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// Clasificamos la demanda del plato según unidades vendidas en el día
let classification;

if (elementValue >= 40) {
  // Plato con alta rotación — muy pedido por los clientes
  classification = "Alta demanda";
} else if (elementValue >= 20) {
  // Plato con demanda media — se pide con regularidad
  classification = "Demanda media";
} else if (elementValue >= 1) {
  // Plato con poca salida — se pide ocasionalmente
  classification = "Baja demanda";
} else {
  // Plato que no se ha pedido hoy
  classification = "Sin ventas";
}


// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// Determinamos si el plato está disponible o no en este momento
const statusLabel = elementStatus === "active" ? "Disponible" : "No disponible";


// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// Asignamos una etiqueta en español según el tipo de plato del menú
let typeLabel;

switch (elementType) {
  case "main-course":
    typeLabel = "Plato Fuerte";
    break;
  case "starter":
    typeLabel = "Entrada";
    break;
  case "dessert":
    typeLabel = "Postre";
    break;
  case "drink":
    typeLabel = "Bebida";
    break;
  default:
    typeLabel = "Tipo desconocido";
}


// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// Mostramos el nombre del plato — si es null usamos un valor por defecto
const displayName = elementName ?? "Sin nombre";

// Accedemos al detalle del plato de forma segura con optional chaining
const infoDetail = elementInfo?.detail ?? "Sin información adicional";


// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// Accedemos al origen del plato de forma segura — si elementInfo es null no rompe
const safeProperty = elementInfo?.origin ?? "Origen no especificado";


// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("  FICHA DE CLASIFICACIÓN DE PLATO");
console.log("=".repeat(40));
console.log(`Nombre:        ${displayName}`);
console.log(`Estado:        ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo:          ${typeLabel}`);
console.log(`Unid. vendidas:${elementValue}`);
console.log(`Detalle:       ${infoDetail}`);
console.log(`Origen:        ${safeProperty}`);
console.log("=".repeat(40));
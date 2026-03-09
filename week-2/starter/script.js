// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 DOMINIO: Sistema de Gestión de Restaurantes
//    Categoría: Hotelería y Hospitalidad
//
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio asignado en UPPER_SNAKE_CASE (constante de configuración)
const DOMAIN_NAME = "Restaurante El Sabor";

// Nombre del plato principal registrado en el sistema (string)
const dishName = "Bandeja Paisa Tradicional";

// Categoría del plato dentro del menú del restaurante (string)
const dishCategory = "Plato Fuerte - Comida Típica";

// Precio base del plato en pesos colombianos (number con separador de miles)
const dishPrice = 35_000;

// Indica si el plato está disponible para ordenar en este momento (boolean)
const isAvailable = true;

// Mesero asignado a la mesa — aún no asignado en el sistema (null)
const assignedWaiter = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

// Mostramos los 4 datos principales con template literals
console.log(`Nombre:        ${dishName}`);
console.log(`Categoría:     ${dishCategory}`);
console.log(`Precio:        $${dishPrice} COP`);
console.log(`Disponible:    ${isAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

// Verificamos el tipo de las 3 variables principales del dominio
console.log("typeof dishName:      ", typeof dishName);
console.log("typeof dishPrice:     ", typeof dishPrice);
console.log("typeof isAvailable:   ", typeof isAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Conversión a) number → String: mostramos el precio como texto con formato
const dishPriceAsText = String(dishPrice);
console.log("Precio como texto:     ", dishPriceAsText);
console.log("typeof (convertido):   ", typeof dishPriceAsText);
console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

// Mostramos el valor null, su tipo y verificamos con ===
console.log("Mesero asignado:  ", assignedWaiter);
console.log("typeof null:      ", typeof assignedWaiter);   // "object" ← bug histórico de JS
console.log("¿Es null?:        ", assignedWaiter === null); // true
console.log("");


console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");
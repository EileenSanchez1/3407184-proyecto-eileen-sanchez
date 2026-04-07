// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Sistema de Gestión de Restaurantes
// Categoría: Hotelería y Hospitalidad
// ============================================

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// Constantes globales del restaurante
const DOMAIN_NAME = "Restaurante El Sabor";
const VALUE_LABEL = "precio";
const CURRENCY    = "COP";
const TAX_RATE    = 0.08; // IVA del 8% para alimentos en restaurante

// Array de platos del menú con propiedades relevantes del dominio
const dishes = [
  { id: 1, name: "Bandeja Paisa Tradicional", category: "principal", value: 35_000, available: true  },
  { id: 2, name: "Ajiaco Bogotano",           category: "principal", value: 28_000, available: true  },
  { id: 3, name: "Empanadas de Pipián",       category: "entrada",   value: 12_000, available: true  },
  { id: 4, name: "Patacones con Hogao",       category: "entrada",   value:  9_000, available: false },
  { id: 5, name: "Arroz con Leche",           category: "postre",    value:  8_000, available: true  },
  { id: 6, name: "Tres Leches",               category: "postre",    value: 10_000, available: false },
  { id: 7, name: "Limonada de Coco",          category: "bebida",    value:  7_000, available: true  },
  { id: 8, name: "Jugo de Maracuyá",          category: "bebida",    value:  6_000, available: true  },
];


// ============================================
// SECCIÓN 2: Función de formato (arrow function)
// ============================================

// Formatea un plato para mostrarlo en pantalla con sus datos principales
const formatDish = (dish) =>
  `🍽️  [${dish.id}] ${dish.name} | ${dish.category} | $${dish.value.toLocaleString()} ${CURRENCY} | ${dish.available ? "✔ Disponible" : "✖ Agotado"}`;


// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula el total de una orden aplicando cantidad y descuento opcional
// Función pura: mismo input siempre produce el mismo output
const calculateOrderTotal = (price, quantity = 1, discountPct = 0) => {
  const subtotal = price * quantity;
  const discount = subtotal * (discountPct / 100);
  return +(subtotal - discount).toFixed(0);
};


// ============================================
// SECCIÓN 4: Función de validación (arrow function)
// ============================================

// Verifica si un plato está disponible para ordenar en este momento
const isDishAvailable = (dish) => dish.available === true;


// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Formatea el precio de un plato con moneda y opción de mostrar IVA
// Usa parámetros por defecto: currency y showTax
const formatPrice = (price, currency = CURRENCY, showTax = false) => {
  const finalPrice = showTax
    ? Math.round(price * (1 + TAX_RATE))
    : price;
  return `$${finalPrice.toLocaleString()} ${currency}${showTax ? " (con IVA)" : ""}`;
};


// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

// --- Listado completo de platos usando formatDish como callback ---
console.log("\n📋 Listado de platos:");
let lineNumber = 1;
for (const dish of dishes) {
  // Usamos formatDish() para mostrar cada plato con su información
  console.log(`  ${lineNumber}. ${formatDish(dish)}`);
  lineNumber++;
}

// --- Conteo de platos disponibles usando isDishAvailable ---
let availableCount = 0;
for (const dish of dishes) {
  // Usamos isDishAvailable() como función de validación
  if (isDishAvailable(dish)) availableCount++;
}
console.log(`\n✅ Platos disponibles: ${availableCount} / ${dishes.length}`);

// --- Cálculo del total del menú usando calculateOrderTotal ---
let totalMenuValue = 0;
for (const dish of dishes) {
  // Calculamos el valor de cada plato con cantidad 1 y sin descuento
  totalMenuValue += calculateOrderTotal(dish.value);
}
console.log(`💰 Valor total del menú: ${formatPrice(totalMenuValue)}`);
console.log(`💰 Valor total con IVA:  ${formatPrice(totalMenuValue, CURRENCY, true)}`);

// --- Ejemplo de orden con descuento usando calculateOrderTotal ---
console.log("\n🧾 Ejemplo de orden:");
const orderTotal = calculateOrderTotal(35_000, 2, 15); // 2 bandejas con 15% descuento
console.log(`  2x Bandeja Paisa con 15% descuento: ${formatPrice(orderTotal)}`);

console.log(`\n${"═".repeat(45)}\n`);
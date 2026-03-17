// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Sistema de Gestión de Restaurantes
// Categoría: Hotelería y Hospitalidad
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Array de platos del menú con nombre, categoría y precio
const dishes = [
  { name: "Bandeja Paisa Tradicional", category: "principal",  value: 35_000 },
  { name: "Ajiaco Bogotano",           category: "principal",  value: 28_000 },
  { name: "Empanadas de Pipián",       category: "entrada",    value: 12_000 },
  { name: "Patacones con Hogao",       category: "entrada",    value: 9_000  },
  { name: "Arroz con Leche",           category: "postre",     value: 8_000  },
  { name: "Tres Leches",               category: "postre",     value: 10_000 },
  { name: "Limonada de Coco",          category: "bebida",     value: 7_000  },
  { name: "Jugo de Maracuyá",          category: "bebida",     value: 6_000  },
];

// Categorías del menú del restaurante
const categories = ["principal", "entrada", "postre", "bebida"];

// Etiqueta del valor numérico — precio en pesos colombianos
const valueLabel = "precio";


// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

// Recorremos cada plato del menú con for...of
let lineNumber = 0;

for (const dish of dishes) {
  lineNumber++;
  // Mostramos número, nombre, categoría y precio de cada plato
  console.log(`${lineNumber}. ${dish.name} — ${dish.category} — ${valueLabel}: $${dish.value}`);
}

console.log("");


// ============================================
// SECCIÓN 3: Contadores por categoría con for...of
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

// Para cada categoría contamos cuántos platos pertenecen a ella
for (const category of categories) {
  let count = 0;

  // Recorremos todos los platos y contamos los de esta categoría
  for (const dish of dishes) {
    if (dish.category === category) count++;
  }

  console.log(`${category}: ${count} plato(s)`);
}

console.log("");


// ============================================
// SECCIÓN 4: Totales y promedio con acumulador
// ============================================
console.log("=== ESTADÍSTICAS ===");

// Acumulamos el precio total de todos los platos del menú
let totalValue = 0;

for (const dish of dishes) {
  // Sumamos el precio de cada plato al total
  totalValue += dish.value;
}

// Calculamos el precio promedio del menú
const averageValue = dishes.length > 0 ? totalValue / dishes.length : 0;

console.log(`Total ${valueLabel}s en menú: $${totalValue}`);
console.log(`Promedio ${valueLabel}: $${averageValue.toFixed(1)}`);

console.log("");


// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

// Inicializamos con el primer plato del array
let maxItem = dishes[0] ?? null;
let minItem = dishes[0] ?? null;

if (dishes.length > 0) {
  // Recorremos con for...of para encontrar el plato más caro y más barato
  for (const dish of dishes) {
    if (dish.value > maxItem.value) maxItem = dish;
    if (dish.value < minItem.value) minItem = dish;
  }

  // Mostramos el plato más caro y más barato del menú
  console.log(`Plato más caro:   ${maxItem?.name} ($${maxItem?.value})`);
  console.log(`Plato más barato: ${minItem?.name} ($${minItem?.value})`);
}

console.log("");


// ============================================
// SECCIÓN 6: Reporte detallado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

// Usamos for clásico para generar el reporte numerado con comparación al promedio
for (let i = 0; i < dishes.length; i++) {
  const dish = dishes[i];

  // Determinamos si el plato está sobre o bajo el precio promedio del menú
  const comparison = dish.value >= averageValue ? "sobre el promedio" : "bajo el promedio";

  // Imprimimos la línea del reporte con todos los datos del plato
  console.log(`${i + 1}. ${dish.name} ($${dish.value}) — ${comparison}`);
}

console.log("");


// ============================================
// SECCIÓN 7: while — turno de servicio
// ============================================
console.log("=== TURNO DE SERVICIO ===");

// Simulamos el servicio de mesas con while — atendemos hasta que no haya más mesas
let tablesRemaining = 5;

while (tablesRemaining > 0) {
  // Atendemos cada mesa del turno actual
  console.log(`Atendiendo mesa #${6 - tablesRemaining} de 5...`);
  tablesRemaining--;
}

console.log("Todas las mesas atendidas ✔");
console.log("");


// ============================================
// SECCIÓN 8: break y continue — filtro de menú
// ============================================
console.log("=== PLATOS PRINCIPALES (sin bebidas) ===");

// Recorremos el menú usando continue para saltar bebidas y break si el precio supera $30.000
for (const dish of dishes) {
  // continue — saltamos las bebidas en este reporte
  if (dish.category === "bebida") continue;

  // break — detenemos si encontramos un plato con precio mayor a $30.000
  if (dish.value > 30_000) {
    console.log(`⚠ Plato premium encontrado: ${dish.name} — se detiene el filtro`);
    break;
  }

  console.log(`✔ ${dish.name} ($${dish.value})`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");
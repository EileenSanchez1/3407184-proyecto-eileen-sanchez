// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Sistema de Gestión de Restaurantes
// Categoría: Hotelería y Hospitalidad
// ============================================

"use strict";

// ---- CONFIGURACIÓN DEL DOMINIO ----
const DOMAIN_NAME = "Restaurante El Sabor";
const VALUE_LABEL = "platos";

// ============================================
// 1. ARRAY INICIAL — Carta de platillos
// ============================================

// Inventario inicial de platos del menú del restaurante
const items = [
  { id: 1, name: "Bandeja Paisa Tradicional", price: 35_000, category: "principal", available: true  },
  { id: 2, name: "Ajiaco Bogotano",           price: 28_000, category: "principal", available: true  },
  { id: 3, name: "Empanadas de Pipián",       price: 12_000, category: "entrada",   available: true  },
  { id: 4, name: "Patacones con Hogao",       price:  9_000, category: "entrada",   available: false },
  { id: 5, name: "Arroz con Leche",           price:  8_000, category: "postre",    available: true  },
  { id: 6, name: "Tres Leches",               price: 10_000, category: "postre",    available: false },
  { id: 7, name: "Limonada de Coco",          price:  7_000, category: "bebida",    available: true  },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

// Agrega un nuevo plato al final de la carta
const addItem = (newItem) => {
  items.push(newItem);
  console.log(`✔ Agregado al menú: ${newItem.name}`);
};

// Elimina el último plato de la carta
const removeLastItem = () => {
  const removed = items.pop();
  console.log(`✖ Eliminado del menú: ${removed.name}`);
  return removed;
};

// Agrega un plato especial al inicio de la carta (máxima prioridad)
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`⭐ Plato especial agregado al inicio: ${priorityItem.name}`);
};

// Elimina un plato por su posición en la carta
const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`✖ Eliminado por posición [${index}]: ${removed[0].name}`);
};

// Retorna solo los platos disponibles para ordenar
const getActiveItems = () => {
  return items.filter((dish) => dish.available === true);
};

// Busca un plato por su nombre exacto
const findByName = (name) => {
  return items.find((dish) => dish.name === name);
};

// Formatea un plato para mostrar en el reporte
const formatItem = (item) => {
  const status = item.available ? "✔ Disponible" : "✖ Agotado";
  return `[${item.id}] ${item.name} — ${item.category} — $${item.price.toLocaleString()} COP — ${status}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`🍽️  GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial de la carta
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// push — agregamos un nuevo plato al final de la carta
addItem({ id: 8, name: "Jugo de Maracuyá", price: 6_000, category: "bebida", available: true });

// unshift — agregamos el plato del día con prioridad al inicio
addPriorityItem({ id: 0, name: "Plato del Día: Sancocho de Gallina", price: 22_000, category: "principal", available: true });

// splice — eliminamos el plato en la posición 3 (Patacones — agotado)
removeByIndex(3);

// pop — eliminamos el último plato de la carta
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// find — buscamos un plato específico por nombre
const found = findByName("Ajiaco Bogotano");
console.log(`🔍 Búsqueda "Ajiaco Bogotano": ${found ? formatItem(found) : "No encontrado"}`);

// filter — obtenemos solo los platos disponibles
const available = getActiveItems();
console.log(`\n✅ Platos disponibles (${available.length}):`);
available.forEach((dish) => console.log(`  — ${dish.name}`));

// spread — snapshot inmutable de la carta actual sin mutar items
const cartaSnapshot = [...items, { id: 99, name: "Especial Chef (vista previa)", price: 45_000, category: "principal", available: false }];
console.log(`\n📸 Snapshot con plato extra (sin mutar items): ${cartaSnapshot.length} platos`);
console.log(`   Items originales siguen siendo: ${items.length}`);

console.log("\n--- Transformación con map ---\n");

// map — lista de solo los nombres de los platos
const names = items.map((dish) => dish.name);
console.log("📝 Nombres en la carta:");
names.forEach((name) => console.log(`  — ${name}`));

// map — precios con descuento del 10% para el menú ejecutivo
const discountedPrices = items.map((dish) => ({
  name: dish.name,
  precioOriginal: dish.price,
  precioEjecutivo: Math.round(dish.price * 0.9),
}));
console.log("\n💸 Precios con descuento ejecutivo (10%):");
discountedPrices.forEach((d) =>
  console.log(`  — ${d.name}: $${d.precioOriginal.toLocaleString()} → $${d.precioEjecutivo.toLocaleString()} COP`)
);

console.log("\n--- Resumen final ---\n");
console.log(`Total en carta:  ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Disponibles:     ${activeCount}`);
console.log(`Agotados:        ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
# 🍽️ Semana 8 — Gestión de Inventario con Arrays
**Bootcamp JavaScript ES2023**

---

## 📋 Descripción

Proyecto de la Semana 8 del bootcamp. Implementa un sistema de gestión de la carta de platos del **Restaurante El Sabor** usando métodos de arrays: mutación, búsqueda, iteración, transformación y spread operator.

---

## 🏷️ Dominio Asignado

| Campo | Detalle |
|---|---|
| **Dominio** | Sistema de Gestión de Restaurantes |
| **Categoría** | Hotelería y Hospitalidad |
| **Entidad principal** | Plato del menú |
| **Array** | `items` — carta de platillos |

---

## 📁 Estructura del Proyecto

```
semana-08/
├── README.md       ← Este archivo
└── starter/
    └── script.js   ← Script principal que corre con Node.js
```

---

## 🚀 Cómo Ejecutar

```bash
cd semana-08/starter
node script.js
```

---

## 🔧 Métodos de Array Usados

```js
items.push(newItem)          // agrega al final
items.pop()                  // elimina el último
items.unshift(priorityItem)  // agrega al inicio
items.splice(index, 1)       // elimina por posición

items.filter(dish => dish.available === true)  // filtra disponibles
items.find(dish => dish.name === name)         // busca por nombre

items.forEach(item => console.log(...))        // itera para mostrar
items.map(dish => dish.name)                   // transforma a nombres
items.map(dish => ({ ...dish, precio: ... }))  // transforma precios

[...items, extraDish]  // spread — copia sin mutar original
```

---

## 📊 Resultados del Reporte

```
Inventario inicial:  7 platos
Tras mutaciones:     7 platos (push + unshift + splice + pop)
Platos disponibles:  5
Platos agotados:     2
Snapshot con spread: 8 platos (sin mutar items originales)
```

---

*Semana 8 · Bootcamp JavaScript ES2023 — push · pop · unshift · splice · filter · find · map · spread*
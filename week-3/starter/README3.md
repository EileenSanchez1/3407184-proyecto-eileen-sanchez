# 🍽️ Semana 3 — Calculadora de Dominio

**Bootcamp JavaScript ES2023**

---

## 📋 Descripción

Proyecto de la Semana 3 del bootcamp. Construye una calculadora multi-operación aplicada al dominio **Sistema de Gestión de Restaurantes**, usando operadores aritméticos, de asignación compuesta, comparación estricta y lógicos.

---

## 🏷️ Dominio Asignado

| Campo | Detalle |
|---|---|
| **Dominio** | Sistema de Gestión de Restaurantes |
| **Categoría** | Hotelería y Hospitalidad |
| **Entidad principal** | Plato del menú / Ventas del día |

---

## 📁 Estructura del Proyecto

```
semana-03/
├── README.md        ← Este archivo
├── index.html       ← Vista visual de la calculadora
├── styles.css       ← Estilos con paleta morado, lila y blanco
└── starter/
    └── script.js    ← Script principal que corre con Node.js
```

---

## 🚀 Cómo Ejecutar

```bash
cd semana-03/starter
node script.js
```

---

## ✅ Requisitos Cumplidos

| Requisito | Detalle | Estado |
|---|---|---|
| Operadores aritméticos `+ - * / %` | Totales, propina, módulo de mesa | ✅ |
| Asignación compuesta `+= -= *= /=` | Acumulado de ventas del día | ✅ |
| Comparación estricta `===` `!==` `>=` `<` | 5 validaciones de negocio | ✅ |
| Sin uso de `==` | Nunca usado | ✅ |
| Operadores lógicos `&&` `\|\|` `!` | Descuento, domicilio, reservas | ✅ |
| Numeric separators `_` | `35_000`, `280_000`, `420_000`... | ✅ |
| `const` para datos fijos | Todos los datos base | ✅ |
| `let` para valores acumulables | `dailySales` | ✅ |
| Sin `var` | Nunca usado | ✅ |
| Comentarios en español | Toda la lógica explicada | ✅ |
| Nomenclatura en inglés | Todas las variables | ✅ |

---

## 📦 Constantes del Dominio

```js
const DISH_PRICE       = 35_000;   // precio plato principal
const DRINK_PRICE      = 8_000;    // precio bebida
const DESSERT_PRICE    = 12_000;   // precio postre
const MAX_TABLES       = 20;       // capacidad máxima
const LOYALTY_DISCOUNT = 0.15;     // descuento cliente frecuente (15%)
const TIP_RATE         = 0.10;     // propina sugerida (10%)
```

---

## 🔢 Operaciones Implementadas

**Aritméticas:** subtotal de orden, propina, total con propina, módulo de mesa

**Asignación compuesta:**
```js
dailySales += 280_000   // turno almuerzo
dailySales += 420_000   // turno cena
dailySales -= 150_000   // costos insumos
dailySales *= 1.05      // bono rendimiento
dailySales /= 2         // dividir entre socios
```

**Comparación estricta:**
```js
seatedGuests === tableCapacity   // ¿mesa llena?
orderedDish === dishOfTheDay     // ¿plato del día?
occupiedTables < MAX_TABLES      // ¿hay mesas?
orderAmount >= deliveryMinimum   // ¿cumple mínimo?
paymentMethod !== "efectivo"     // ¿no es efectivo?
```

**Operadores lógicos:**
```js
isLoyalCustomer && customerOrderTotal >= 80_000  // descuento
isLoyalCustomer || customerOrderTotal >= 60_000  // domicilio gratis
!(occupiedTables >= MAX_TABLES)                  // acepta reservas
```

*Semana 3 · Bootcamp JavaScript ES2023 — Operadores Aritméticos, Comparación y Lógica*
# 🍽️ Semana 2 — Ficha de Datos del Dominio

**Bootcamp JavaScript ES2023**

---

## 📋 Descripción

Proyecto de la Semana 2 del bootcamp. Extiende la ficha de la Semana 1 aplicando los nuevos conceptos aprendidos: variables con `const`, tipos de datos (`string`, `number`, `boolean`, `null`), operador `typeof` y conversiones explícitas con `String()`, `Number()` y `Boolean()`.

El dominio es **Sistema de Gestión de Restaurantes** — categoría Hotelería y Hospitalidad.

---

## 🏷️ Dominio Asignado

| Campo | Detalle |
|---|---|
| **Dominio** | Sistema de Gestión de Restaurantes |
| **Categoría** | Hotelería y Hospitalidad |
| **Entidad principal** | Plato del menú |
| **Constante de dominio** | `DOMAIN_NAME = "Restaurante El Sabor"` |

---

## 📁 Estructura del Proyecto

```
semana-02/
├── README.md        ← Este archivo
├── index.html       ← Vista visual de la ficha en el navegador
├── styles.css       ← Estilos con paleta azul, morado y blanco
└── starter/
    └── script.js    ← Script principal que corre con Node.js
```

---

## 🚀 Cómo Ejecutar

### En la terminal (Node.js)
```bash
cd semana-02/starter
node script.js
```

### En el navegador
Abre `index.html` directamente en tu navegador. No necesita servidor.

---

## ✅ Requisitos Cumplidos

| Requisito | Detalle | Estado |
|---|---|---|
| `const` con `string` | `dishName`, `dishCategory` | ✅ |
| `const` con `number` | `dishPrice = 35_000` | ✅ |
| `const` con `boolean` | `isAvailable = true` | ✅ |
| `const` con `null` | `assignedWaiter = null` | ✅ |
| `typeof` de 3 variables | `dishName`, `dishPrice`, `isAvailable` | ✅ |
| Conversión explícita | `String(dishPrice)` → `"35000"` | ✅ |
| Verificación de null | `typeof` + `=== null` | ✅ |
| `camelCase` | Todas las variables | ✅ |
| `UPPER_SNAKE_CASE` | `DOMAIN_NAME` | ✅ |
| Boolean con prefijo semántico | `isAvailable` | ✅ |
| Separador `_` en número grande | `35_000` | ✅ |

---

## 📦 Variables Declaradas

```js
const DOMAIN_NAME    = "Restaurante El Sabor";       // string — UPPER_SNAKE_CASE
const dishName       = "Bandeja Paisa Tradicional";  // string
const dishCategory   = "Plato Fuerte - Comida Típica"; // string
const dishPrice      = 35_000;                       // number con separador _
const isAvailable    = true;                         // boolean — prefijo is
const assignedWaiter = null;                         // null — mesero no asignado
```

---

## 🔄 Conversión Explícita

```js
// number → String
const dishPriceAsText = String(dishPrice);
// resultado: "35000"
// typeof:    string
```

---

## 🔍 Salida de typeof

```
typeof dishName:      string
typeof dishPrice:     number
typeof isAvailable:   boolean
typeof assignedWaiter: object  ← bug histórico de JS (es null realmente)
```


*Semana 2 · Bootcamp JavaScript ES2023 — Variables, Tipos y Conversiones*
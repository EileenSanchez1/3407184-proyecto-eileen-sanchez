# 🍽️ Semana 4 — Generador de Mensajes de Dominio

**Bootcamp JavaScript ES2023**

---

## 📋 Descripción

Proyecto de la Semana 4 del bootcamp. Construye un generador de mensajes en consola para el dominio **Sistema de Gestión de Restaurantes**, usando métodos de string y template literals para generar fichas y notificaciones.

---

## 🏷️ Dominio Asignado

| Campo | Detalle |
|---|---|
| **Dominio** | Sistema de Gestión de Restaurantes |
| **Categoría** | Hotelería y Hospitalidad |
| **Entidad principal** | Plato del menú |
| **Código** | `PLT-001` |

---

## 📁 Estructura del Proyecto

```
semana-04/
├── README.md        ← Este archivo
├── index.html       ← Vista visual del generador
├── styles.css       ← Estilos con paleta morado, lila y blanco
└── starter/
    └── script.js    ← Script principal que corre con Node.js
```

---

## 🚀 Cómo Ejecutar

```bash
cd semana-04/starter
node script.js
```

---

## ✅ Requisitos Cumplidos

| Requisito | Detalle | Estado |
|---|---|---|
| Datos como `const` string | `rawEntityName`, `entityCategory`, `entityCode`, `entityDescription` | ✅ |
| `trim()` | Limpia espacios de `rawEntityName` | ✅ |
| `toUpperCase()` | Nombre en mayúsculas para encabezado | ✅ |
| `toLowerCase()` | Nombre en minúsculas para log de sistema | ✅ |
| `slice(0, 3)` | Extrae prefijo `PLT` del código | ✅ |
| `replace()` | Formatea código `PLT-001` → `PLT — 001` | ✅ |
| `repeat(45)` | Genera separadores `===` y `---` | ✅ |
| `startsWith()` | Valida prefijo del código | ✅ |
| `includes()` | Valida palabra clave en descripción | ✅ |
| `endsWith()` | Valida sufijo del código | ✅ |
| Template literals | Toda la salida sin concatenación `+` | ✅ |
| Ficha multilínea | Construida con template literal multilínea | ✅ |
| Mensaje corto | Notificación pública + log de sistema | ✅ |
| Sin `var` | Nunca usado | ✅ |
| Comentarios en español | Toda la lógica explicada | ✅ |
| Nomenclatura en inglés | Todas las variables | ✅ |

---

## 🔧 Métodos de String Usados

```js
rawEntityName.trim()               // elimina espacios al inicio y al final
entityName.toUpperCase()           // convierte a mayúsculas
entityName.toLowerCase()           // convierte a minúsculas
entityCode.slice(0, 3)             // extrae "PLT" del código
entityCode.replace("-", " — ")     // formatea el código para mostrar
"=".repeat(45)                     // genera línea separadora
entityCode.startsWith("PLT")       // valida prefijo → true
entityDescription.includes("restaurante") // valida palabra clave → true
entityCode.endsWith("001")         // valida sufijo → true
```

---

## 🖨️ Salida en Consola

```
=============================================
  RESTAURANTE EL SABOR — FICHA DE PLATO
=============================================
Nombre:      BANDEJA PAISA TRADICIONAL
Categoría:   Plato Fuerte - Comida Típica
Código:      PLT — 001
Prefijo:     PLT
Precio:      $35000 COP
Estado:      Activo

---------------------------------------------
Descripción:
Plato típico colombiano con frijoles, chicharrón, carne molida...
=============================================

--- Validaciones ---
¿Código empieza con 'PLT'?:        true
¿Descripción contiene 'restaurante'?:  true
¿Código termina con '001'?:            true

--- Notificación ---
📢 Nuevo plato disponible: Bandeja Paisa Tradicional (PLT-001) — $35000 COP
[SISTEMA] plato registrado: bandeja paisa tradicional | código: PLT-001
```

*Semana 4 · Bootcamp JavaScript ES2023 — Métodos de String y Template Literals*
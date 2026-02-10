# 📚 Guía Rápida: Subir a GitHub

## 🎯 Método 1: GitHub Desktop (RECOMENDADO - MÁS FÁCIL)

### Paso 1: Instalar
1. Ve a https://desktop.github.com/
2. Descarga e instala
3. Abre GitHub Desktop
4. Haz login con tu cuenta de GitHub (o créala en https://github.com/)

### Paso 2: Crear Repositorio
1. En GitHub Desktop: **File** → **New Repository**
2. Datos:
   - **Name**: `proyecto-restaurante-semana1`
   - **Description**: `Sistema de Gestión de Restaurantes - Semana 1`
   - **Local Path**: Elige dónde guardarlo
   - ✅ Marca "Initialize with README"
3. Click **Create Repository**

### Paso 3: Copiar Archivos
1. GitHub Desktop → **Repository** → **Show in Explorer/Finder**
2. Copia TODOS estos archivos a esa carpeta:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (reemplaza el existente)
   - `.gitignore`

### Paso 4: Hacer Commit
1. Vuelve a GitHub Desktop
2. Verás los archivos en el panel izquierdo
3. Abajo a la izquierda escribe:
   - **Summary**: `Proyecto Semana 1 completo`
   - **Description**: `Sistema de gestión de restaurante con ES2023`
4. Click **Commit to main**

### Paso 5: Publicar
1. Click **Publish repository**
2. Desmarca "Keep this code private" (si quieres que sea público)
3. Click **Publish repository**

✅ **¡LISTO! Tu proyecto ya está en GitHub**

El link será: `https://github.com/TU_USUARIO/proyecto-restaurante-semana1`

---

## 🎯 Método 2: Git por Terminal

### Requisitos
- Tener Git instalado (https://git-scm.com/)
- Tener cuenta en GitHub

### Paso 1: Configurar Git (solo primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"
```

### Paso 2: Crear Repositorio en GitHub.com
1. Ve a https://github.com/
2. Click en **"+"** → **"New repository"**
3. Nombre: `proyecto-restaurante-semana1`
4. Descripción: `Sistema de Gestión de Restaurantes`
5. **NO marques** "Initialize with README"
6. Click **"Create repository"**

### Paso 3: Subir el Proyecto
Abre la terminal en la carpeta del proyecto:

```bash
# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Proyecto Semana 1: Sistema de Gestión de Restaurantes"

# Conecta con tu repositorio (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/proyecto-restaurante-semana1.git

# Sube el proyecto
git branch -M main
git push -u origin main
```

Te pedirá tu usuario y contraseña de GitHub.

✅ **¡LISTO!**

---

## 🎯 Método 3: Subir Directo en GitHub.com

### Paso 1: Crear Repositorio
1. Ve a https://github.com/
2. Click **"+"** → **"New repository"**
3. Nombre: `proyecto-restaurante-semana1`
4. **Marca** "Initialize with README"
5. Click **"Create repository"**

### Paso 2: Subir Archivos
1. En tu repositorio, click **"Add file"** → **"Upload files"**
2. Arrastra todos los archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.gitignore`
3. Abajo escribe: `Proyecto Semana 1 completo`
4. Click **"Commit changes"**

### Paso 3: Actualizar README
1. Click en `README.md`
2. Click en el ícono del lápiz (editar)
3. Borra todo y pega el contenido del README.md del proyecto
4. Click **"Commit changes"**

✅ **¡LISTO!**

---

## 📸 Agregar Screenshots (Opcional)

1. Toma capturas de pantalla:
   - Tema claro
   - Tema oscuro

2. En GitHub:
   - Click **"Add file"** → **"Upload files"**
   - Sube las imágenes
   - Nómbralas: `screenshot-light.png` y `screenshot-dark.png`

---

## ❓ Preguntas Frecuentes

**P: ¿Cuál método usar?**
R: GitHub Desktop es el más fácil para principiantes

**P: ¿Público o Privado?**
R: Público si quieres que todos lo vean, Privado si solo tú

**P: ¿Puedo hacer cambios después?**
R: Sí, haz cambios, commit, y push nuevamente

**P: ¿Olvidé mi contraseña de GitHub?**
R: Usa "Forgot password" en github.com

---

## ✅ Verificar que Funcionó

1. Ve a: `https://github.com/TU_USUARIO/proyecto-restaurante-semana1`
2. Deberías ver todos tus archivos
3. Comparte este link con tu instructor

---

**¡Éxito con tu entrega!** 🚀

# 🛒 Plataforma de Comercio Electrónico (React)

Aplicación web de comercio electrónico desarrollada con **React** que permite a los usuarios explorar un catálogo de productos, visualizar detalles, gestionar una lista de deseos y autenticarse mediante un sistema de login simulado.

Además, incluye un panel de administración para la gestión de productos e inventario.

---

# 🚀 Tecnologías Utilizadas

- ⚛️ React
- 🎨 Tailwind CSS
- 🧭 React Router DOM
- 📝 React Hook Form
- 💾 LocalStorage
- 📜 JavaScript (ES6+)

---

# ⚙️ Funcionalidades

## 🧑 Funcionalidades para Usuarios

### 🔍 Catálogo Dinámico

- Visualización de productos
- Búsqueda en tiempo real por:
  - Nombre
  - Categoría

### 📄 Detalle de Producto

- Información completa del producto
- Vista individual de cada artículo

### 🔐 Registro y Login (Simulado)

- Formularios gestionados con React Hook Form
- Validaciones incluidas:
  - Campos obligatorios
  - Formato válido de email
  - Contraseña segura
- Persistencia de sesión mediante LocalStorage

### ❤️ Lista de Deseos

- Agregar productos a favoritos
- Eliminar productos de favoritos
- Persistencia por usuario utilizando LocalStorage

---

## 🛠️ Panel de Administración

### 📊 CRUD de Productos

- Crear productos
- Editar productos
- Eliminar productos

### 📦 Gestión de Inventario

- Validación de campos
- Control de ID único para productos

### 👥 Gestión de Usuarios *(Opcional)*

- Visualización de usuarios registrados
- Eliminación de usuarios

---

# 🧠 Gestión de Estado y Persistencia

La aplicación utiliza:

- `useState` para el manejo de estado global y local
- `useEffect` para sincronizar datos con LocalStorage

### Persistencia de:

- Productos
- Usuarios
- Sesión
- Lista de deseos

---

# 🧩 Componentes Reutilizables

- Navbar
- Card
- Button
- Modal
- Form
- ProductList

---

# 🎨 Estilos con Tailwind CSS

- Diseño 100% responsive
- Uso de clases utilitarias
- Layout flexible con:
  - Flexbox
  - Grid
- Componentes estilizados de forma consistente

---

# 📝 Formularios con React Hook Form

- Manejo eficiente de formularios
- Validaciones simples y escalables
- Mejor rendimiento gracias a menos re-renderizados

---

# 🧭 Navegación con React Router DOM

Aplicación SPA (Single Page Application) sin recargas de página.

### Implementación de:

- `BrowserRouter`
- `Routes`
- `Route`
- `Navigate`

### Funcionalidades:

- Navegación dinámica
- Rutas protegidas para administrador

---

# 📱 Diseño Responsive

Compatible con:

- 📱 Mobile
- 💻 Desktop
- 📲 Tablets

---

# 📂 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Ingresar al proyecto
cd nombre-del-proyecto

# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev
```

---

# 📌 Objetivos del Proyecto

- Practicar desarrollo de aplicaciones con React
- Implementar manejo de estado y persistencia
- Utilizar formularios avanzados con validaciones
- Aplicar navegación SPA
- Crear interfaces responsive y reutilizables

---

# 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de práctica.

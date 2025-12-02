# Portafolio Web - Jorge Freire

Este proyecto es un portafolio web personal moderno y responsivo, construido con **React.js** y **Vite**. Diseñado con un enfoque "Mobile First" y una estética premium (Dark Mode + Glassmorphism).

## 🚀 Tecnologías Utilizadas

*   **React.js**: Biblioteca principal para la interfaz de usuario.
*   **Vite**: Entorno de desarrollo rápido y herramienta de construcción.
*   **CSS3**: Estilos personalizados con variables CSS, Flexbox, Grid y animaciones.
*   **EmailJS**: Servicio para el envío de correos electrónicos directamente desde el frontend.

## 📝 Paso a Paso de la Creación

A continuación se detalla el proceso de desarrollo de este portafolio:

### 1. Inicialización del Proyecto
Se utilizó Vite para crear una estructura ligera y rápida:
```bash
npm create vite@latest . -- --template react
npm install
```

### 2. Diseño y Estilos Globales (`index.css`)
Se definió un sistema de diseño centralizado utilizando **Variables CSS** para facilitar el mantenimiento y la consistencia:
*   **Paleta de Colores**: Tema oscuro con acentos en violeta (`#8b5cf6`) y rosa (`#ec4899`).
*   **Glassmorphism**: Clases utilitarias `.glass` para efectos de vidrio esmerilado.
*   **Tipografía**: Uso de la fuente 'Inter' o fuentes del sistema.
*   **Reset**: Normalización básica de márgenes y paddings.

### 3. Desarrollo de Componentes
La aplicación se dividió en componentes modulares dentro de `src/components/`:

*   **Navbar**:
    *   Barra de navegación fija que cambia de estilo al hacer scroll.
    *   **Responsividad**: Incluye un menú de hamburguesa animado para dispositivos móviles.
    
*   **Hero**:
    *   Sección de bienvenida con presentación.
    *   Incluye animaciones de entrada (`fade-in`) y un fondo decorativo con gradientes animados.
    
*   **About**:
    *   Descripción personal y grid de habilidades (Skills).
    *   Efectos hover en las etiquetas de habilidades.
    
*   **Projects**:
    *   Galería de proyectos destacados.
    *   Diseño adaptable: 3 columnas en escritorio, 1 columna en móvil.
    
*   **Contact**:
    *   Formulario de contacto funcional.
    *   Integración con **EmailJS** para envío real de mensajes.
    *   Manejo de estados de carga, éxito y error.

*   **Footer**:
    *   Pie de página con derechos de autor y enlaces a redes sociales.

### 4. Integración de Funcionalidades

#### Menú Responsivo
Se implementó lógica en `Navbar.jsx` para detectar el tamaño de pantalla y gestionar el estado del menú desplegable en móviles.

#### Formulario de Contacto (EmailJS)
1.  Instalación de la dependencia: `npm install @emailjs/browser`
2.  Configuración del servicio en `Contact.jsx` conectando con los IDs de EmailJS (Service ID, Template ID, Public Key).

## 🛠️ Instalación y Uso

Si deseas clonar y correr este proyecto localmente:

1.  **Clonar el repositorio**:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd Portafolio
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar EmailJS**:
    *   Crea un archivo `.env` o edita directamente `src/components/Contact.jsx` con tus credenciales de EmailJS.

4.  **Correr el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📄 Licencia
Este proyecto es de uso libre para fines educativos y personales.

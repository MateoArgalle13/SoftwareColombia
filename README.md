# Aplicación de Héroes de Software Colombia

Este proyecto es una aplicación web de React que consume una API de superhéroes, permitiendo listar, paginar y visualizar los detalles de cada héroe. Desarrollado con Vite, React, Material UI, Axios y React Query, se enfoca en una experiencia de usuario fluida.

## Resumen de Características y Mejoras Implementadas

Durante el desarrollo de esta aplicación, nos enfacamos en:

1.  **Listado y Paginación de Héroes:**
    * Implementación de una lista dinámica de superhéroes.
    * Funcionalidad de paginación que interactúa con la API usando los parámetros `page` y `size`.
    * Control del tamaño de la página (héroes por fila) para una mejor experiencia de usuario.
    * Manejo de estados de carga (`CircularProgress`) y error (`Alert`) para una retroalimentación clara al usuario.
    * Navegación fluida entre páginas con scroll al inicio.

2.  **Detalles del Héroe:**
    * Vista detallada para cada superhéroe, accesible al hacer clic en su tarjeta.
    * Presentación organizada de información como apariencia, biografía, poderes, conexiones y trabajo.

3.  **Consumo de API:**
    * Utilización de `axios` para las llamadas HTTP.
    * Manejo eficiente del estado de los datos, caché y sincronización con `React Query`.
    * Ajuste preciso de los parámetros de paginación de la API (`size` y `page`) para asegurar la compatibilidad con el backend.

4.  **Diseño y Experiencia de Usuario (UI/UX) - "El Plus Visual":**
    * **Material UI:** Base del diseño, proporcionando componentes modernos y un sistema de diseño robusto.
    * **Diseño Responsivo con Grid:** Las tarjetas de héroes se adaptan fluidamente a diferentes tamaños de pantalla, mostrando:
        * 1 tarjeta por fila en móviles (`xs={12}`).
        * 2 tarjetas por fila en tablets (`sm={6}`).
        * 3 tarjetas por fila en escritorios pequeños (`md={4}`).
    * **Tarjetas de Héroes Interactivas (`HeroCard`):**
        * **Estado Inicial:** Muestra la imagen del héroe y su nombre con un degradado en la parte inferior para mejorar la legibilidad.
        * **Efecto Hover:** Al pasar el ratón, la tarjeta revela de forma suave y animada los poderes del héroe y un botón "VER MÁS", superponiéndose a la imagen con un fondo semi-transparente oscuro.
        * **Navegación Mejorada:** Tanto el clic en la tarjeta (excepto el botón) como el clic en el botón "VER MÁS" navegan a la página de detalles del héroe.
    * **Estilos con SCSS:** Se utiliza SCSS para la modularización y el preprocesamiento de estilos, permitiendo una mayor flexibilidad y mantenimiento, especialmente en componentes como `HeroCard`.

## Tecnologías Utilizadas

* **React:** Biblioteca para construir interfaces de usuario.
* **Vite:** Herramienta de construcción rápida para proyectos frontend.
* **Material UI:** Framework de componentes React para un diseño moderno.
* **React Query (TanStack Query):** Gestión de estado asíncrono, cacheo y sincronización de datos.
* **Axios:** Cliente HTTP basado en promesas para el navegador y Node.js.
* **Sass (SCSS):** Preprocesador CSS para estilos más organizados y potentes.
* **React Router DOM:** Para la navegación y el enrutamiento dentro de la aplicación.

## Cómo Ejecutar el Proyecto

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

### 1. Clona el Repositorio

Si el proyecto está en un repositorio Git, clónalo:

git clone https://github.com/MateoArgalle13/SoftwareColombia.git
cd test-frontend

### 2. Instalación de Dependencias
Una vez dentro del directorio del proyecto, instala las dependencias usando npm o yarn:
Bash
npm install
--o
yarn install

### 3. Ejecutar la Aplicación
Para iniciar el servidor de desarrollo, que generalmente se ejecuta en http://localhost:5173 (o un puerto similar configurado por Vite):

Bash

npm run dev
--o
yarn dev

Esto abrirá la aplicación en tu navegador predeterminado. Cualquier cambio que guardes en los archivos del proyecto se verá reflejado automáticamente gracias al Hot Module Replacement (HMR) de Vite


```bash




# Proyecto 2 - ReactJS
# Los Voluntarios 🌱

Web de la organización de voluntariado ambiental **Los Voluntarios**, dedicada a la limpieza de costas y ríos, reforestación, educación ambiental y protección de especies en Algeciras y su comarca.

## Tecnologías

- **React** — librería principal de la interfaz.
- **Vite** — bundler y servidor de desarrollo.
- **Chakra UI v3** — sistema de componentes y estilos.
- **React Router** — navegación entre páginas (`BrowserRouter`).
- **React Icons** — iconografía (`react-icons/fa`).
- **Netlify** — despliegue continuo desde `main`.

## Paleta de colores

El sitio usa una paleta en tonos verdes, consistente en todas las páginas:

| Uso                        | Token                                   |
| -------------------------- | --------------------------------------- |
| Fondos alternos            | `green.50` / `white`                    |
| Títulos                    | `green.700`                             |
| Texto secundario           | `gray.600` / `gray.700`                 |
| Secciones destacadas / CTA | `green.700` con texto blanco            |
| Hover en botones/tarjetas  | `translateY` + oscurecimiento del verde |

## Estructura de páginas

- **Home** — página de inicio con presentación general y noticias.
- **About** — quiénes somos, misión y visión, qué hacemos (limpieza de costas, reforestación, educación ambiental, protección de especies) y nuestros valores, con llamada a la acción hacia `/joinUs`.
- **JoinUs** — formulario de inscripción de voluntarios.
- **Team** — listado del equipo, cargado de forma asíncrona desde el `TeamContext`.

## Arquitectura de componentes

- `components/context/TeamContext` — maneja el estado global del equipo (`team`, `isLoading`, `loadTeam`) mediante Context API, con `useCallback` para evitar recreaciones innecesarias de funciones y un `ref` para prevenir peticiones duplicadas a la API.
- `components/DetailMember` — tarjeta individual de cada miembro del equipo.
- `components/Footer` — pie de página con enlaces sociales (exportación con nombre).
- `components/ScrollToTop` — restaura el scroll al inicio en cada cambio de ruta, escuchando `useLocation`.
- `routing/Routing.jsx` — define las rutas de la aplicación mediante un barrel `pages/index.js`.

## Puesta en marcha local
```bash
git clone https://github.com/TamezeDev/Proyecto-2---ReactJS.gits
cd Proyecto-2---ReactJS
npm install
npm run dev
```

## Despliegue

El sitio se despliega automáticamente en **Netlify** con cada `push` a `main`.


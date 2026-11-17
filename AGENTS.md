# AGENTS.md

Manual de trabajo para cualquier agente (y persona) que colabore en este repositorio. Léelo antes de empezar cada tarea.

## Qué es

**Faro** es el design system de **SavePoint**, una app social de reseñas de videojuegos. En SavePoint cada persona registra los juegos a los que ha jugado, los puntúa, escribe reseñas, crea listas (pendientes, para comprar…), sube fotos de sus juegos, sigue a otros usuarios y comenta las reseñas de sus amigos.

Faro reúne los fundamentos visuales (tokens), los componentes y las pautas de uso que dan forma a la interfaz de SavePoint, para que todo el producto sea coherente y accesible.

## Tecnología

- **React con TypeScript**, usando **Vite** como herramienta de desarrollo y compilación.
- **Tailwind CSS** para los estilos.
- **Tabler Icons** para los iconos.
- **Ninguna librería de componentes**: todos los componentes se crean desde cero. No añadas dependencias como MUI, Chakra, shadcn/ui, Radix, Headless UI o similares.
- **Storybook** para ver y documentar los componentes uno a uno. Se publica solo en GitHub Pages (https://hectorgrande-bit.github.io/Faro/) cada vez que algo cambia en `main`, con la GitHub Action `.github/workflows/storybook.yml`.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Arranca la app en http://localhost:6001 |
| `npm run storybook` | Arranca Storybook en http://localhost:6006 |
| `npm run lint` | Revisa el código y avisa de fallos |
| `npm run build` | Comprueba los tipos y prepara la versión final de la app |
| `npm run build-storybook` | Prepara la versión publicable de Storybook |

Los puertos son fijos: si el 6001 o el 6006 están ocupados, el comando da un error en lugar de cambiarse a otro puerto. No cambies este comportamiento.

## Dónde va cada cosa

- `src/components/`: los componentes, uno por archivo (`Button.tsx`), y su historia al lado (`Button.stories.tsx`). `src/components/index.ts` los exporta todos.
- `docs/componentes.md`: la tabla de estado de los componentes. Es la **única fuente**: no copies su contenido en ningún otro sitio.
- `src/stories/Status.mdx`: la página Status de Storybook. Solo lee `docs/componentes.md` y lo pinta; no escribas la tabla aquí.
- `.storybook/`: la configuración de Storybook.

## Cómo trabajamos

- **Idioma**: todo en español (conversación, commits, PR, documentación y comentarios).
- **Ramas y PR**: a partir de ahora, cada cambio se hace siempre en una rama propia y se propone mediante una pull request. No se sube nada directamente a `main`.
- **Explicaciones sin jerga**: al describir los cambios (en la conversación y en la PR), explica qué has hecho y por qué en un lenguaje claro, que se entienda sin conocimientos técnicos.
- **Dependencias**: si cambias `package.json`, actualiza también `package-lock.json` en la misma PR.
- **Componentes nuevos**: en la misma PR en la que crees un componente, añade su historia (`NombreComponente.stories.tsx`, con sus variantes y estados), expórtalo en `src/components/index.ts` y añade su fila en `docs/componentes.md`. Si cambias un componente, actualiza también su historia.
- **Antes de abrir una PR**: comprueba que `npm run lint`, `npm run build` y `npm run build-storybook` terminan sin errores.

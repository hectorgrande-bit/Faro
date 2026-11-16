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

## Cómo trabajamos

- **Idioma**: todo en español (conversación, commits, PR, documentación y comentarios).
- **Ramas y PR**: a partir de ahora, cada cambio se hace siempre en una rama propia y se propone mediante una pull request. No se sube nada directamente a `main`.
- **Explicaciones sin jerga**: al describir los cambios (en la conversación y en la PR), explica qué has hecho y por qué en un lenguaje claro, que se entienda sin conocimientos técnicos.
- **Dependencias**: si cambias `package.json`, actualiza también `package-lock.json` en la misma PR.

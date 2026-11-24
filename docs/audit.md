# Auditoría del design system Faro

Fecha: 24 de noviembre de 2026. Revisa `main` en el commit `dc46372`.

Alcance: los cuatro componentes de `src/components/` (`Button`, `Input`, `Card` y `Badge`). Las historias de Storybook (`*.stories.tsx`) solo se mencionan cuando afectan a lo que se audita.

Contexto: Faro todavía no tiene tokens propios (`primary`, `danger`, `surface`…). Todos los componentes usan directamente la paleta y las escalas que Tailwind trae por defecto, así que cada color, espaciado y radio está escrito dentro del propio componente.

---

## 1. Inventario de componentes

| Componente | Archivo | Variantes (prop) | Tamaños (prop) | Otras opciones | Valores por defecto |
|---|---|---|---|---|---|
| Button | `src/components/Button.tsx` | `variant`: `primary`, `secondary`, `ghost`, `danger` | `size`: `sm`, `md`, `lg` | `icon`, `iconPosition` (`left`, `right`), `loading`, `fullWidth`, y las del `<button>` de HTML | `variant="primary"`, `size="md"`, `iconPosition="left"`, `type="button"` |
| Input | `src/components/Input.tsx` | No tiene. El aspecto cambia según el estado: normal, con error (`error`) o desactivado (`disabled`) | `size`: `sm`, `md`, `lg` | `label`, `hint`, `error`, `icon`, y las del `<input>` de HTML (salvo su `size` nativo) | `size="md"` |
| Card | `src/components/Card.tsx` | `variant`: `elevated`, `outlined`, `filled` | No tiene `size`. El espacio interior se elige con `padding`: `none`, `sm`, `md`, `lg` | `interactive`, y las del `<div>` de HTML | `variant="outlined"`, `padding="md"` |
| Badge | `src/components/Badge.tsx` | `color`: `gray`, `violet`, `blue`, `green`, `yellow`, `red` | `size`: `sm`, `md` | `icon`, y las del `<span>` de HTML | `color="gray"`, `size="md"` |

Estados que cubre cada componente:

| Componente | Al pasar el ratón | Al pulsar | Foco con teclado | Desactivado | Cargando | Error |
|---|---|---|---|---|---|---|
| Button | ✅ | ✅ | ✅ (contorno) | ✅ | ✅ | — |
| Input | — | — | ✅ (borde más grueso) | ✅ | — | ✅ |
| Card | ✅ solo si `interactive` | — | ❌ | — | — | — |
| Badge | — | — | — | — | — | — |

---

## 2. Colores, espaciados y radios de Tailwind por componente

### Button

| Tipo | Valores |
|---|---|
| Colores de fondo | `violet-800`, `violet-900`, `violet-950` (primary) · `white`, `gray-50`, `gray-100` (secondary) · `transparent`, `gray-100`, `gray-200` (ghost) · `red-700`, `red-800`, `red-900` (danger) |
| Colores de texto | `white` (primary, danger) · `gray-900` (secondary) · `gray-700` (ghost) |
| Bordes y contornos | `ring-gray-300` (secondary) · contorno de foco `outline-violet-800` (primary, secondary, ghost) y `outline-red-700` (danger) |
| Altura | `h-8` (sm), `h-10` (md), `h-12` (lg) |
| Espacio a los lados | `px-3.5` (sm), `px-5` (md), `px-6` (lg) |
| Separación icono–texto | `gap-1.5` (sm), `gap-2` (md, lg) |
| Contorno de foco | `outline-2`, `outline-offset-2` |
| Tamaño de texto | `text-sm` (sm, md), `text-base` (lg) |
| Radio | `rounded-full` (píldora) |
| Otros | `font-medium`, `opacity-50` al estar desactivado |

### Input

| Tipo | Valores |
|---|---|
| Colores de fondo | `white` · `gray-50` (desactivado) |
| Colores de texto | `gray-900` (texto y título) · `gray-400` (texto de ejemplo e icono) · `gray-500` (ayuda y texto desactivado) · `red-600` (mensaje de error) |
| Bordes | `ring-gray-300` (normal) · `ring-violet-800` (mientras se escribe) · `ring-red-500` (error) |
| Grosor del borde | `ring-1`, y `ring-2` mientras se escribe |
| Altura | `h-8` (sm), `h-10` (md), `h-12` (lg) |
| Espacio a los lados, sin icono | `px-2.5` (sm), `px-3` (md), `px-4` (lg) |
| Espacio a los lados, con icono | `pl-8 pr-2.5` (sm), `pl-9 pr-3` (md), `pl-11 pr-4` (lg) |
| Posición del icono | `left-2.5` (sm), `left-3` (md), `left-4` (lg) |
| Separaciones | `gap-1.5` (entre título, campo y mensaje) · `gap-1` (entre icono de error y mensaje) |
| Tamaño de texto | `text-sm` (sm, md, título y mensaje), `text-base` (lg) |
| Radio | `rounded-lg` |

### Card

| Tipo | Valores |
|---|---|
| Colores de fondo | `white` (elevated, outlined) · `gray-50` (filled) |
| Colores de texto | `gray-900` |
| Bordes | `ring-gray-900/5` (elevated) · `ring-gray-200` (outlined) · ninguno (filled) |
| Sombras | `shadow-md` (elevated) · `shadow-lg` al pasar el ratón si es `interactive` |
| Espacio interior | `p-0` (none), `p-3` (sm), `p-5` (md), `p-8` (lg) |
| Movimiento | `-translate-y-0.5` al pasar el ratón si es `interactive` |
| Radio | `rounded-xl` |

### Badge

| Tipo | Valores |
|---|---|
| Colores de fondo | `gray-100`, `violet-50`, `blue-50`, `green-50`, `yellow-50`, `red-50` |
| Colores de texto | `gray-700`, `violet-700`, `blue-700`, `green-700`, `yellow-800`, `red-700` |
| Bordes | `ring-gray-500/20`, `ring-violet-600/20`, `ring-blue-600/20`, `ring-green-600/20`, `ring-yellow-600/20`, `ring-red-600/20` |
| Espacio interior | `px-1.5 py-0.5` (sm), `px-2 py-1` (md) |
| Separación icono–texto | `gap-1` |
| Tamaño de texto | `text-xs` (los dos tamaños) |
| Radio | `rounded-md` |

### Lo que se ve al compararlos

- **Cuatro radios distintos**: `rounded-full` en Button, `rounded-lg` en Input, `rounded-xl` en Card y `rounded-md` en Badge. No hay una regla que diga cuál usar en cada caso.
- **Cuatro tonos de violeta para lo mismo**: el violeta de marca es `violet-800` en Button e Input, pero Badge usa `violet-700` (texto), `violet-600` (borde) y `violet-50` (fondo).
- **Tres rojos para «error» o «peligro»**: `red-700` (Button danger y texto de Badge red), `red-600` (mensaje de error de Input y borde de Badge red) y `red-500` (borde de Input con error).
- **Alturas compartidas**: Button e Input usan las mismas alturas (`h-8`, `h-10`, `h-12`) para `sm`, `md` y `lg`, así que se alinean bien en una misma fila. Badge no sigue esa escala.
- **El gris de los bordes varía**: `gray-300` (Button secondary, Input), `gray-200` (Card outlined) y `gray-900/5` (Card elevated).

---

## 3. Valores escritos a mano dentro de los componentes

No hay **ningún color en hexadecimal** (`#…`) ni **ningún valor arbitrario** entre corchetes (`[…]`) dentro de los componentes. Sí hay colores de la paleta de Tailwind y medidas en píxeles escritos directamente en cada archivo, en lugar de salir de un token compartido.

### Colores de la paleta de Tailwind

| Archivo | Línea | Valor | Para qué |
|---|---|---|---|
| `src/components/Button.tsx` | 24 | `bg-violet-800`, `hover:bg-violet-900`, `active:bg-violet-950`, `outline-violet-800`, `text-white` | Variante `primary` |
| `src/components/Button.tsx` | 26 | `bg-white`, `text-gray-900`, `ring-gray-300`, `hover:bg-gray-50`, `active:bg-gray-100`, `outline-violet-800` | Variante `secondary` |
| `src/components/Button.tsx` | 28 | `bg-transparent`, `text-gray-700`, `hover:bg-gray-100`, `active:bg-gray-200`, `outline-violet-800` | Variante `ghost` |
| `src/components/Button.tsx` | 30 | `bg-red-700`, `hover:bg-red-800`, `active:bg-red-900`, `outline-red-700`, `text-white` | Variante `danger` |
| `src/components/Input.tsx` | 53 | `text-gray-900` | Título del campo |
| `src/components/Input.tsx` | 64 | `text-gray-400` | Icono dentro del campo |
| `src/components/Input.tsx` | 75 | `bg-white`, `text-gray-900`, `placeholder:text-gray-400` | Campo |
| `src/components/Input.tsx` | 77 | `disabled:bg-gray-50`, `disabled:text-gray-500` | Campo desactivado |
| `src/components/Input.tsx` | 78 | `ring-red-500`, `focus:ring-red-500` · `ring-gray-300`, `focus:ring-violet-800` | Borde con error · borde normal |
| `src/components/Input.tsx` | 90 | `text-red-600` · `text-gray-500` | Mensaje de error · texto de ayuda |
| `src/components/Card.tsx` | 16 | `bg-white`, `ring-gray-900/5` | Variante `elevated` |
| `src/components/Card.tsx` | 17 | `bg-white`, `ring-gray-200` | Variante `outlined` |
| `src/components/Card.tsx` | 18 | `bg-gray-50` | Variante `filled` |
| `src/components/Card.tsx` | 39 | `text-gray-900` | Texto de la tarjeta |
| `src/components/Badge.tsx` | 17 | `bg-gray-100`, `text-gray-700`, `ring-gray-500/20` | Color `gray` |
| `src/components/Badge.tsx` | 18 | `bg-violet-50`, `text-violet-700`, `ring-violet-600/20` | Color `violet` |
| `src/components/Badge.tsx` | 19 | `bg-blue-50`, `text-blue-700`, `ring-blue-600/20` | Color `blue` |
| `src/components/Badge.tsx` | 20 | `bg-green-50`, `text-green-700`, `ring-green-600/20` | Color `green` |
| `src/components/Badge.tsx` | 21 | `bg-yellow-50`, `text-yellow-800`, `ring-yellow-600/20` | Color `yellow` |
| `src/components/Badge.tsx` | 22 | `bg-red-50`, `text-red-700`, `ring-red-600/20` | Color `red` |

### Medidas en píxeles

Son los tamaños de los iconos de Tabler y el grosor de su trazo. Se escriben como números porque el icono no usa clases de Tailwind.

| Archivo | Línea | Valor | Para qué |
|---|---|---|---|
| `src/components/Button.tsx` | 39 | `16`, `18`, `20` px | Tamaño del icono en `sm`, `md` y `lg` |
| `src/components/Button.tsx` | 58 | `stroke={2}` | Grosor del trazo del icono |
| `src/components/Input.tsx` | 31 | `16`, `18`, `20` px | Tamaño del icono en `sm`, `md` y `lg` |
| `src/components/Input.tsx` | 61 | `stroke={1.75}` | Grosor del trazo del icono (distinto del de Button y Badge) |
| `src/components/Input.tsx` | 93 | `16` px | Tamaño del icono de error |
| `src/components/Badge.tsx` | 48 | `12`, `14` px · `stroke={2}` | Tamaño del icono en `sm` y `md`, y grosor del trazo |

### Fuera de los componentes

En las historias de Storybook hay colores que no salen de ningún componente: `from-violet-500 to-fuchsia-500` (`src/components/Card.stories.tsx`, línea 47, el degradado que hace de portada), `text-gray-600` (`Card.stories.tsx`, línea 7) y `text-gray-500` (`Button.stories.tsx`, línea 39). Solo afectan a los ejemplos, no a la app.

---

## 4. Nombres de props y variantes que un agente no adivinaría

Son nombres o comportamientos que alguien (persona o agente) usaría mal si se guiara por la intuición o por otras librerías, en lugar de leer el componente.

### Inconsistencias entre componentes

| Lo que se esperaría | Lo que hay | Dónde |
|---|---|---|
| `variant` para elegir el estilo, como en Button y Card | `color` | Badge |
| `size` para el tamaño, como en Button, Input y Badge | `padding` (solo cambia el espacio interior) | Card |
| Nombres con significado (`primary`, `danger`…), como en Button | Nombres de colores (`violet`, `red`…) | Badge |
| `size="lg"`, que existe en Button e Input | Solo hay `sm` y `md` | Badge |
| La misma variante por defecto en todos | `primary` en Button, pero `outlined` (no `elevated`) en Card | Card |

### Nombres poco habituales

| Prop o valor | Qué hace | Nombres que se probarían antes |
|---|---|---|
| `variant="danger"` (Button) | Botón rojo para acciones peligrosas | `destructive`, `error`, `negative` |
| `variant="ghost"` (Button) | Botón sin fondo ni borde | `text`, `link`, `tertiary`, `plain` |
| `iconPosition="left" \| "right"` (Button) | Lado del icono | `iconPlacement`, `start`/`end`, `leftIcon`/`rightIcon` |
| `fullWidth` (Button) | Ocupa todo el ancho | `block`, `wide`, `stretch` |
| `hint` (Input) | Texto de ayuda bajo el campo | `helperText`, `description`, `helpText` |
| `variant="filled"` (Card) | Fondo gris sin borde | `subtle`, `muted`, `flat` |
| `padding="none"` (Card) | Sin espacio interior, para imágenes a sangre | `flush`, `noPadding`, `bleed` |
| `interactive` (Card) | Efecto al pasar el ratón | `clickable`, `hoverable`, `pressable` |

### Comportamientos que no se deducen del nombre

- **`icon` recibe el componente, no el icono dibujado**: se escribe `icon={IconPlus}`, no `icon={<IconPlus />}`. Pasa en Button, Input y Badge.
- **`error` en Input es un texto, no un sí/no**: `error="Este nombre ya existe"` marca el campo en rojo y muestra el mensaje. `error={true}` no funciona como se esperaría. Además, cuando hay error, el mensaje sustituye a `hint`.
- **`size` en Input sustituye al `size` normal del campo de HTML**: en un `<input>` normal, `size` es el ancho en caracteres; aquí es `sm`, `md` o `lg`.
- **`className` en Input va al contenedor, no al campo**: se aplica a la caja que agrupa título, campo y mensaje. Para dar estilo al propio campo no hay ninguna opción.
- **El icono de Input siempre va a la izquierda**: no hay `iconPosition`, a diferencia de Button.
- **Button es `type="button"` por defecto**: dentro de un formulario no lo envía salvo que se indique `type="submit"`. En HTML normal, un botón dentro de un formulario lo envía.
- **`loading` también desactiva el botón**: no hace falta añadir `disabled`. Mientras carga, el icono se sustituye por el círculo que gira.
- **`interactive` en Card solo cambia el aspecto**: no convierte la tarjeta en algo que se pueda pulsar con el teclado ni le da el papel de botón o enlace. Eso hay que añadirlo aparte (`onClick`, `role`, `tabIndex`…).
- **El identificador del mensaje de Input termina en `-mensaje`**, en español (por ejemplo, `campo-mensaje`). Es relevante si se buscan elementos por su identificador en pruebas.

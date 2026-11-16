import type { ReactNode } from 'react'
import {
  IconDeviceGamepad2,
  IconHeart,
  IconList,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconStar,
  IconUsers,
} from '@tabler/icons-react'

// Página "Tailwind": muestra los valores que Tailwind trae por defecto.
// Estos valores NO son todavía los de Faro; son el punto de partida.

const colores = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink',
  'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'mauve', 'olive',
  'mist', 'taupe',
]

const tonos = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

// En Tailwind v4 cada paso de espaciado vale 0.25rem (4px): p-4 = 1rem = 16px.
const espaciado = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20,
  24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
]

const radios = [
  { nombre: 'rounded-none', valor: '0' },
  { nombre: 'rounded-xs', valor: 'var(--radius-xs)' },
  { nombre: 'rounded-sm', valor: 'var(--radius-sm)' },
  { nombre: 'rounded-md', valor: 'var(--radius-md)' },
  { nombre: 'rounded-lg', valor: 'var(--radius-lg)' },
  { nombre: 'rounded-xl', valor: 'var(--radius-xl)' },
  { nombre: 'rounded-2xl', valor: 'var(--radius-2xl)' },
  { nombre: 'rounded-3xl', valor: 'var(--radius-3xl)' },
  { nombre: 'rounded-4xl', valor: 'var(--radius-4xl)' },
  { nombre: 'rounded-full', valor: 'calc(infinity * 1px)' },
]

const textos = [
  'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl',
  '8xl', '9xl',
]

const iconos = [
  { nombre: 'IconDeviceGamepad2', Icono: IconDeviceGamepad2 },
  { nombre: 'IconStar', Icono: IconStar },
  { nombre: 'IconHeart', Icono: IconHeart },
  { nombre: 'IconUsers', Icono: IconUsers },
  { nombre: 'IconSearch', Icono: IconSearch },
  { nombre: 'IconMessageCircle', Icono: IconMessageCircle },
  { nombre: 'IconPhoto', Icono: IconPhoto },
  { nombre: 'IconList', Icono: IconList },
]

function Seccion({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold">{titulo}</h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-gray-900">
      <h1 className="text-4xl font-bold">Tailwind</h1>
      <p className="mt-2 max-w-2xl text-gray-600">
        Valores que Tailwind trae por defecto. No son los de Faro: son el punto
        de partida antes de definir nuestro propio design system.
      </p>

      <Seccion titulo="Paleta de color">
        <div className="overflow-x-auto">
          <div className="min-w-[44rem] space-y-2">
            <div className="grid grid-cols-[6rem_repeat(11,1fr)] gap-1 text-xs text-gray-500">
              <span />
              {tonos.map((tono) => (
                <span key={tono} className="text-center">{tono}</span>
              ))}
            </div>
            {colores.map((color) => (
              <div key={color} className="grid grid-cols-[6rem_repeat(11,1fr)] items-center gap-1">
                <span className="text-sm font-medium">{color}</span>
                {tonos.map((tono) => (
                  <div
                    key={tono}
                    title={`${color}-${tono}`}
                    className="h-10 rounded-md ring-1 ring-black/5 ring-inset"
                    style={{ backgroundColor: `var(--color-${color}-${tono})` }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Seccion>

      <Seccion titulo="Espaciado">
        <p className="mb-4 text-sm text-gray-600">
          Cada paso vale 0.25rem (4px). Por ejemplo, <code>p-4</code> es 1rem (16px).
        </p>
        <div className="space-y-1 overflow-x-auto">
          {espaciado.map((paso) => (
            <div key={paso} className="flex items-center gap-4">
              <span className="w-12 shrink-0 text-right font-mono text-sm">{paso}</span>
              <span className="w-32 shrink-0 whitespace-nowrap font-mono text-xs text-gray-500">
                {paso * 0.25}rem · {paso * 4}px
              </span>
              <div
                className="h-4 shrink-0 bg-sky-500"
                style={{ width: `calc(var(--spacing) * ${paso})` }}
              />
            </div>
          ))}
        </div>
      </Seccion>

      <Seccion titulo="Radios">
        <div className="flex flex-wrap gap-6">
          {radios.map(({ nombre, valor }) => (
            <div key={nombre} className="flex flex-col items-center gap-2">
              <div className="size-20 bg-violet-500" style={{ borderRadius: valor }} />
              <span className="font-mono text-xs">{nombre}</span>
            </div>
          ))}
        </div>
      </Seccion>

      <Seccion titulo="Tamaños de texto">
        <div className="space-y-3 overflow-x-auto">
          {textos.map((tamano) => (
            <div key={tamano} className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 font-mono text-sm text-gray-500">text-{tamano}</span>
              <span
                className="whitespace-nowrap"
                style={{
                  fontSize: `var(--text-${tamano})`,
                  lineHeight: `var(--text-${tamano}--line-height)`,
                }}
              >
                SavePoint
              </span>
            </div>
          ))}
        </div>
      </Seccion>

      <Seccion titulo="Iconos (Tabler Icons)">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {iconos.map(({ nombre, Icono }) => (
            <div key={nombre} className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
              <Icono size={32} stroke={1.5} />
              <span className="text-center font-mono text-xs break-all">{nombre}</span>
            </div>
          ))}
        </div>
      </Seccion>
    </main>
  )
}

export default App

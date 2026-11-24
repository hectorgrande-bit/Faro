import { useSyncExternalStore, type ComponentType } from 'react'
import TailwindPage from './TailwindPage'

// Índice de la app: un menú arriba y, debajo, la página elegida.
// Cada página tiene su propia dirección: #/tailwind, #/antes…
//
// Las pantallas se registran solas: cada archivo de src/screens/ aparece en el
// menú con el nombre del archivo, y su dirección es #/<nombre-del-archivo>.
// Cada archivo debe exportar su pantalla por defecto (export default).

type Pagina = { ruta: string; nombre: string; Componente: ComponentType }

const archivosDePantallas = import.meta.glob<{ default: ComponentType }>(
  './screens/*.tsx',
  { eager: true },
)

const pantallas: Pagina[] = Object.entries(archivosDePantallas)
  .map(([archivo, modulo]) => {
    const nombre = archivo.replace('./screens/', '').replace('.tsx', '')
    return { ruta: nombre, nombre, Componente: modulo.default }
  })
  .sort((a, b) => a.nombre.localeCompare(b.nombre))

const paginas: Pagina[] = [
  { ruta: 'tailwind', nombre: 'Tailwind', Componente: TailwindPage },
  ...pantallas,
]

function leerRuta() {
  return window.location.hash.replace(/^#\/?/, '')
}

function escucharCambiosDeRuta(avisar: () => void) {
  window.addEventListener('hashchange', avisar)
  return () => window.removeEventListener('hashchange', avisar)
}

function App() {
  const ruta = useSyncExternalStore(escucharCambiosDeRuta, leerRuta)
  // Si la dirección no existe (o está vacía), se abre la página Tailwind.
  const actual = paginas.find((pagina) => pagina.ruta === ruta) ?? paginas[0]
  const { Componente } = actual

  return (
    <div className="flex h-dvh flex-col bg-white text-gray-900">
      <nav className="shrink-0 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-1 overflow-x-auto px-4 py-2">
          <span className="mr-3 font-semibold">Faro</span>
          {paginas.map((pagina) => {
            const activa = pagina === actual
            return (
              <a
                key={pagina.ruta}
                href={`#/${pagina.ruta}`}
                aria-current={activa ? 'page' : undefined}
                className={[
                  'rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-800',
                  activa
                    ? 'bg-violet-100 text-violet-900'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                ].join(' ')}
              >
                {pagina.nombre}
              </a>
            )
          })}
        </div>
      </nav>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Componente key={actual.ruta} />
      </div>
    </div>
  )
}

export default App

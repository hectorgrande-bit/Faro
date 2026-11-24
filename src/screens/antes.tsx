import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  IconDeviceGamepad2,
  IconRobot,
  IconSend,
  IconSparkles,
  IconTrash,
  IconUser,
} from '@tabler/icons-react'
import { Badge, Button, Card, Input } from '../components'

// Pantalla de asistente: historial de mensajes, estado vacío y campo para escribir abajo.
// Las respuestas del asistente son de ejemplo: todavía no hay ningún asistente conectado.

type Mensaje = {
  id: number
  autor: 'usuario' | 'asistente'
  texto: string
}

const sugerencias = [
  '¿Qué juego de mi lista de pendientes empiezo?',
  'Recomiéndame algo parecido a Hollow Knight',
  'Ayúdame a escribir una reseña',
]

function respuestaDeEjemplo(pregunta: string) {
  return `Esta es una respuesta de ejemplo a «${pregunta}». Cuando el asistente esté conectado, aquí aparecerá su respuesta.`
}

function EstadoVacio({ alElegir }: { alElegir: (texto: string) => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-4 py-12 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-violet-100 text-violet-800">
        <IconSparkles size={28} stroke={1.75} aria-hidden />
      </div>
      <div className="max-w-sm">
        <h2 className="text-lg font-semibold">¿En qué te ayudo?</h2>
        <p className="mt-1 text-sm text-gray-500">
          Pregúntame por tus juegos, tus listas o tus reseñas. Puedes empezar con una de estas ideas:
        </p>
      </div>
      <div className="flex w-full max-w-md flex-col gap-2">
        {sugerencias.map((sugerencia) => (
          <Button key={sugerencia} variant="secondary" onClick={() => alElegir(sugerencia)}>
            {sugerencia}
          </Button>
        ))}
      </div>
    </div>
  )
}

function Burbuja({ mensaje }: { mensaje: Mensaje }) {
  const esUsuario = mensaje.autor === 'usuario'
  const Avatar = esUsuario ? IconUser : IconRobot

  return (
    <li className={['flex items-end gap-2', esUsuario ? 'flex-row-reverse' : ''].join(' ')}>
      <div
        className={[
          'flex size-8 shrink-0 items-center justify-center rounded-full',
          esUsuario ? 'bg-gray-100 text-gray-600' : 'bg-violet-100 text-violet-800',
        ].join(' ')}
      >
        <Avatar size={18} stroke={1.75} aria-hidden />
      </div>
      <Card
        variant={esUsuario ? 'filled' : 'outlined'}
        padding="sm"
        className="max-w-4/5 text-sm"
      >
        <span className="sr-only">{esUsuario ? 'Tú:' : 'Asistente:'} </span>
        {mensaje.texto}
      </Card>
    </li>
  )
}

export default function Antes() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([])
  const [texto, setTexto] = useState('')
  const [pensando, setPensando] = useState(false)
  const finalRef = useRef<HTMLDivElement>(null)

  // Al llegar un mensaje nuevo, baja hasta el final del historial.
  useEffect(() => {
    finalRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes, pensando])

  function enviar(contenido: string) {
    const pregunta = contenido.trim()
    if (!pregunta || pensando) return

    setMensajes((anteriores) => [
      ...anteriores,
      { id: Date.now(), autor: 'usuario', texto: pregunta },
    ])
    setTexto('')
    setPensando(true)

    window.setTimeout(() => {
      setMensajes((anteriores) => [
        ...anteriores,
        { id: Date.now(), autor: 'asistente', texto: respuestaDeEjemplo(pregunta) },
      ])
      setPensando(false)
    }, 800)
  }

  function alEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    enviar(texto)
  }

  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <IconDeviceGamepad2 size={24} stroke={1.75} className="text-violet-800" aria-hidden />
          <h1 className="text-lg font-semibold">Asistente</h1>
          <Badge color="violet" size="sm">Beta</Badge>
        </div>
        {mensajes.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            icon={IconTrash}
            onClick={() => setMensajes([])}
            disabled={pensando}
          >
            Vaciar
          </Button>
        )}
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {mensajes.length === 0 ? (
          <EstadoVacio alElegir={enviar} />
        ) : (
          <ol className="flex flex-col gap-4 px-4 py-6" aria-live="polite">
            {mensajes.map((mensaje) => (
              <Burbuja key={mensaje.id} mensaje={mensaje} />
            ))}
            {pensando && (
              <li className="flex items-center gap-2 pl-10 text-sm text-gray-500">
                El asistente está escribiendo…
              </li>
            )}
          </ol>
        )}
        <div ref={finalRef} />
      </div>

      <form
        onSubmit={alEnviar}
        className="flex shrink-0 items-center gap-2 border-t border-gray-200 bg-white px-4 py-3"
      >
        <Input
          className="flex-1"
          aria-label="Escribe tu mensaje"
          placeholder="Escribe tu mensaje…"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          autoComplete="off"
        />
        <Button
          type="submit"
          icon={IconSend}
          loading={pensando}
          disabled={!texto.trim()}
        >
          Enviar
        </Button>
      </form>
    </div>
  )
}

import type { ComponentProps } from 'react'

type CardVariant = 'elevated' | 'outlined' | 'filled'
type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export type CardProps = ComponentProps<'div'> & {
  /** Estilo de la tarjeta. Por defecto, "outlined". */
  variant?: CardVariant
  /** Espacio interior. Por defecto, "md". Usa "none" si dentro va una imagen a sangre. */
  padding?: CardPadding
  /** Si es true, la tarjeta reacciona al pasar el ratón (para tarjetas que se pueden pulsar). */
  interactive?: boolean
}

const variantClasses: Record<CardVariant, string> = {
  elevated: 'bg-white shadow-md ring-1 ring-gray-900/5',
  outlined: 'bg-white ring-1 ring-gray-200',
  filled: 'bg-gray-50',
}

const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
}

export function Card({
  variant = 'outlined',
  padding = 'md',
  interactive = false,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        'overflow-hidden rounded-xl text-gray-900',
        variantClasses[variant],
        paddingClasses[padding],
        interactive
          ? 'cursor-pointer transition hover:-translate-y-0.5 hover:shadow-lg'
          : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

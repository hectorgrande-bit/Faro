import type { ComponentProps } from 'react'
import { IconLoader2, type TablerIcon } from '@tabler/icons-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ComponentProps<'button'> & {
  /** Estilo del botón. Por defecto, "primary". */
  variant?: ButtonVariant
  /** Tamaño del botón. Por defecto, "md". */
  size?: ButtonSize
  /** Icono de Tabler opcional, por ejemplo IconPlus. */
  icon?: TablerIcon
  /** Lado en el que aparece el icono. Por defecto, "left". */
  iconPosition?: 'left' | 'right'
  /** Muestra un indicador de carga y desactiva el botón. */
  loading?: boolean
  /** Hace que el botón ocupe todo el ancho disponible. */
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 focus-visible:outline-violet-600',
  secondary:
    'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 active:bg-gray-100 focus-visible:outline-violet-600',
  ghost:
    'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-violet-600',
  danger:
    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:outline-red-600',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 gap-1.5 px-3 text-sm',
  md: 'h-10 gap-2 px-4 text-sm',
  lg: 'h-12 gap-2 px-5 text-base',
}

const iconSizes: Record<ButtonSize, number> = { sm: 16, md: 18, lg: 20 }

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  disabled,
  type = 'button',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const iconSize = iconSizes[size]
  const iconElement = loading ? (
    <IconLoader2 size={iconSize} className="animate-spin" aria-hidden />
  ) : Icon ? (
    <Icon size={iconSize} stroke={2} aria-hidden />
  ) : null

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={[
        'inline-flex shrink-0 items-center justify-center rounded-lg font-medium transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  )
}

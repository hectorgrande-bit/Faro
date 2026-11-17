import type { ComponentProps } from 'react'
import type { TablerIcon } from '@tabler/icons-react'

type BadgeColor = 'gray' | 'violet' | 'blue' | 'green' | 'yellow' | 'red'
type BadgeSize = 'sm' | 'md'

export type BadgeProps = ComponentProps<'span'> & {
  /** Color de la etiqueta. Por defecto, "gray". */
  color?: BadgeColor
  /** Tamaño de la etiqueta. Por defecto, "md". */
  size?: BadgeSize
  /** Icono de Tabler opcional, delante del texto (por ejemplo IconStar). */
  icon?: TablerIcon
}

const colorClasses: Record<BadgeColor, string> = {
  gray: 'bg-gray-100 text-gray-700 ring-gray-500/20',
  violet: 'bg-violet-50 text-violet-700 ring-violet-600/20',
  blue: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  green: 'bg-green-50 text-green-700 ring-green-600/20',
  yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
  red: 'bg-red-50 text-red-700 ring-red-600/20',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'gap-1 px-1.5 py-0.5 text-xs',
  md: 'gap-1 px-2 py-1 text-xs',
}

export function Badge({
  color = 'gray',
  size = 'md',
  icon: Icon,
  className = '',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md font-medium whitespace-nowrap ring-1 ring-inset',
        colorClasses[color],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 14} stroke={2} aria-hidden />}
      {children}
    </span>
  )
}

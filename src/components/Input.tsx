import { useId, type ComponentProps } from 'react'
import { IconAlertCircle, type TablerIcon } from '@tabler/icons-react'

type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = Omit<ComponentProps<'input'>, 'size'> & {
  /** Texto que aparece encima del campo. */
  label?: string
  /** Texto de ayuda que aparece debajo del campo. */
  hint?: string
  /** Mensaje de error. Si existe, el campo se marca en rojo y sustituye a la ayuda. */
  error?: string
  /** Icono de Tabler opcional dentro del campo, a la izquierda (por ejemplo IconSearch). */
  icon?: TablerIcon
  /** Tamaño del campo. Por defecto, "md". */
  size?: InputSize
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-8 text-sm',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
}

const paddingClasses: Record<InputSize, { normal: string; withIcon: string }> = {
  sm: { normal: 'px-2.5', withIcon: 'pl-8 pr-2.5' },
  md: { normal: 'px-3', withIcon: 'pl-9 pr-3' },
  lg: { normal: 'px-4', withIcon: 'pl-11 pr-4' },
}

const iconSizes: Record<InputSize, number> = { sm: 16, md: 18, lg: 20 }
const iconLeft: Record<InputSize, string> = { sm: 'left-2.5', md: 'left-3', lg: 'left-4' }

export function Input({
  label,
  hint,
  error,
  icon: Icon,
  size = 'md',
  id,
  disabled,
  className = '',
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = `${inputId}-mensaje`
  const message = error ?? hint

  return (
    <div className={['flex flex-col gap-1.5', className].join(' ')}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon
            size={iconSizes[size]}
            stroke={1.75}
            aria-hidden
            className={[
              'pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400',
              iconLeft[size],
            ].join(' ')}
          />
        )}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          className={[
            'w-full rounded-lg bg-white text-gray-900 ring-1 ring-inset transition-shadow placeholder:text-gray-400',
            'focus:ring-2 focus:outline-none',
            'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
            error ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-300 focus:ring-violet-800',
            sizeClasses[size],
            Icon ? paddingClasses[size].withIcon : paddingClasses[size].normal,
          ].join(' ')}
          {...props}
        />
      </div>
      {message && (
        <p
          id={messageId}
          className={[
            'flex items-center gap-1 text-sm',
            error ? 'text-red-600' : 'text-gray-500',
          ].join(' ')}
        >
          {error && <IconAlertCircle size={16} aria-hidden />}
          {message}
        </p>
      )}
    </div>
  )
}

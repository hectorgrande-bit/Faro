import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconArrowRight, IconPlus, IconTrash } from '@tabler/icons-react'
import { Button } from './Button'

const meta = {
  title: 'Componentes/Button',
  component: Button,
  args: { children: 'Añadir juego' },
  argTypes: {
    icon: { control: false },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Danger: Story = { args: { variant: 'danger', children: 'Borrar', icon: IconTrash } }

const variantes = ['primary', 'secondary', 'ghost', 'danger'] as const

export const TodasLasVariantes: Story = {
  name: 'Todas las variantes',
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {variantes.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const Estados: Story = {
  render: (args) => (
    <div className="grid w-max grid-cols-[repeat(4,max-content)] items-center gap-x-6 gap-y-3 text-sm text-gray-500">
      <span />
      <span>Normal</span>
      <span>Cargando</span>
      <span>Desactivado</span>
      {variantes.map((variant) => (
        <div key={variant} className="contents">
          <span className="font-mono">{variant}</span>
          <Button {...args} variant={variant}>Guardar</Button>
          <Button {...args} variant={variant} loading>Guardar</Button>
          <Button {...args} variant={variant} disabled>Guardar</Button>
        </div>
      ))}
    </div>
  ),
}

export const ConIcono: Story = { args: { icon: IconPlus } }
export const IconoALaDerecha: Story = {
  name: 'Icono a la derecha',
  args: { variant: 'secondary', children: 'Siguiente', icon: IconArrowRight, iconPosition: 'right' },
}

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">Pequeño</Button>
      <Button {...args} size="md">Mediano</Button>
      <Button {...args} size="lg">Grande</Button>
    </div>
  ),
}

export const Cargando: Story = { args: { loading: true, children: 'Guardando' } }
export const Desactivado: Story = { args: { disabled: true } }
export const AnchoCompleto: Story = { args: { fullWidth: true } }

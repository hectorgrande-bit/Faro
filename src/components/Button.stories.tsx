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

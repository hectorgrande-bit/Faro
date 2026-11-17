import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconCheck, IconDeviceGamepad2, IconStar } from '@tabler/icons-react'
import { Badge } from './Badge'

const meta = {
  title: 'Componentes/Badge',
  component: Badge,
  args: { children: 'Pendiente' },
  argTypes: { icon: { control: false } },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const PorDefecto: Story = {}

export const Colores: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge {...args} color="gray">Pendiente</Badge>
      <Badge {...args} color="violet">Jugando</Badge>
      <Badge {...args} color="blue">PS5</Badge>
      <Badge {...args} color="green">Completado</Badge>
      <Badge {...args} color="yellow">Favorito</Badge>
      <Badge {...args} color="red">Abandonado</Badge>
    </div>
  ),
}

export const ConIcono: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge {...args} color="violet" icon={IconDeviceGamepad2}>Jugando</Badge>
      <Badge {...args} color="green" icon={IconCheck}>Completado</Badge>
      <Badge {...args} color="yellow" icon={IconStar}>4,5</Badge>
    </div>
  ),
}

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex items-center gap-2">
      <Badge {...args} size="sm">Pequeño</Badge>
      <Badge {...args} size="md">Mediano</Badge>
    </div>
  ),
}

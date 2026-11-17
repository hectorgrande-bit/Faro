import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconMail, IconSearch } from '@tabler/icons-react'
import { Input } from './Input'

const meta = {
  title: 'Componentes/Input',
  component: Input,
  args: { label: 'Nombre de usuario', placeholder: 'hector' },
  argTypes: {
    icon: { control: false },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const PorDefecto: Story = {}
export const ConAyuda: Story = {
  args: { label: 'Correo', icon: IconMail, placeholder: 'tu@correo.com', hint: 'No lo compartiremos con nadie' },
}
export const ConIcono: Story = {
  args: { label: 'Buscar juego', icon: IconSearch, placeholder: 'Zelda, Hades…' },
}
export const ConError: Story = {
  args: { defaultValue: 'hector', error: 'Este nombre ya existe' },
}
export const Desactivado: Story = { args: { disabled: true, defaultValue: 'hector' } }

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Input {...args} size="sm" label="Pequeño" />
      <Input {...args} size="md" label="Mediano" />
      <Input {...args} size="lg" label="Grande" />
    </div>
  ),
}

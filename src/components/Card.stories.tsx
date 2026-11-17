import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const contenido = (
  <>
    <h3 className="font-semibold">Hollow Knight</h3>
    <p className="mt-1 text-sm text-gray-600">Metroidvania · 2017</p>
  </>
)

const meta = {
  title: 'Componentes/Card',
  component: Card,
  args: { children: contenido },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="max-w-xs"><Story /></div>],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = { args: { variant: 'outlined' } }
export const Elevated: Story = { args: { variant: 'elevated' } }
export const Filled: Story = { args: { variant: 'filled' } }
export const Interactiva: Story = { args: { variant: 'elevated', interactive: true } }

export const Espaciados: Story = {
  decorators: [(Story) => <div className="max-w-2xl"><Story /></div>],
  render: (args) => (
    <div className="grid grid-cols-2 gap-4">
      {(['none', 'sm', 'md', 'lg'] as const).map((padding) => (
        <Card key={padding} {...args} padding={padding}>
          <span className="font-mono text-sm">padding=&quot;{padding}&quot;</span>
        </Card>
      ))}
    </div>
  ),
}

export const ConImagenASangre: Story = {
  name: 'Con imagen a sangre',
  args: {
    padding: 'none',
    variant: 'elevated',
    children: (
      <>
        <div className="h-32 bg-linear-to-br from-violet-500 to-fuchsia-500" />
        <div className="p-5">{contenido}</div>
      </>
    ),
  },
}

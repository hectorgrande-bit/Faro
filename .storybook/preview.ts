import type { Preview } from '@storybook/react-vite'
// Carga Tailwind para que los componentes se vean igual que en la app.
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    options: {
      storySort: { order: ['Status', 'Componentes'] },
    },
  },
  tags: ['autodocs'],
}

export default preview

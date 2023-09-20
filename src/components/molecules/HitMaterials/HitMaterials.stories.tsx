import { CanvasProvider } from '@/utils/canvasProvider'

import { HitMaterials } from './HitMaterials'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'HitMaterials',
  component: HitMaterials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof HitMaterials>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <CanvasProvider>
        <Story />
      </CanvasProvider>
    ),
  ],
}
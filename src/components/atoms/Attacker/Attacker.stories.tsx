import * as THREE from 'three'

import { CanvasProvider } from '@/utils/canvasProvider'

import { Attacker } from './Attacker'

import type { Meta, StoryObj } from '@storybook/react'
export type AttackerProps = {}

const meta = {
  title: 'Attacker',
  component: Attacker,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Attacker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    key: 0,
    color: '#fff',
    charge: 0,
    position: { x: 0, y: 0, z: 0 },
  },
  decorators: [
    (Story) => (
      <CanvasProvider camera={new THREE.PerspectiveCamera()}>
        <Story />
      </CanvasProvider>
    ),
  ],
}

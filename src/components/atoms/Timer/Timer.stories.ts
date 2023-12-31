import { Timer } from './Timer'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Timer',
  component: Timer,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    navigation: {
      pathname: '/finish',
    },
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Timer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import { ColorPicker } from './color-picker'

import type { Meta, StoryObj } from '@storybook/react'

type ColorPickerType = typeof ColorPicker

export default {
    title: 'ColorPicker',
    component: ColorPicker
} satisfies Meta<ColorPickerType>

export const Default: StoryObj<ColorPickerType> = {
    render: () => <ColorPicker />
}

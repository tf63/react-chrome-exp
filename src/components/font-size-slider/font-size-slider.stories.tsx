import { FontSizeSlider } from './font-size-slider'

import type { Meta, StoryObj } from '@storybook/react'

type FontSizeSliderType = typeof FontSizeSlider

export default {
    title: 'FontSizeSlider',
    component: FontSizeSlider
} satisfies Meta<FontSizeSliderType>

export const Default: StoryObj<FontSizeSliderType> = {
    render: () => <FontSizeSlider />
}

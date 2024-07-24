import { Formula } from './formula'

import type { Meta, StoryObj } from '@storybook/react'

type FormulaType = typeof Formula

export default {
    title: 'Formula',
    component: Formula
} satisfies Meta<FormulaType>

export const Default: StoryObj<FormulaType> = {
    render: () => <Formula />
}

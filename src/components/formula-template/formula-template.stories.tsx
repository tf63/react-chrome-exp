import { FormulaTemplate } from './formula-template'

import type { Meta, StoryObj } from '@storybook/react'

type FormulaTemplateType = typeof FormulaTemplate

export default {
    title: 'FormulaTemplate',
    component: FormulaTemplate
} satisfies Meta<FormulaTemplateType>

export const Default: StoryObj<FormulaTemplateType> = {
    render: () => <FormulaTemplate />
}

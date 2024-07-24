import { CopyBlock } from './copy-block'

import type { Meta, StoryObj } from '@storybook/react'

type CopyBlockType = typeof CopyBlock

export default {
    title: 'CopyBlock',
    component: CopyBlock
} satisfies Meta<CopyBlockType>

export const Default: StoryObj<CopyBlockType> = {
    render: () => <CopyBlock />
}

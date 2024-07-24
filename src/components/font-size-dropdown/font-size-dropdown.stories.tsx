import { useState } from 'react'

import { FontSizeDropdown } from './font-size-dropdown'

import type { Meta, StoryObj } from '@storybook/react'

type FontSizeDropdownType = typeof FontSizeDropdown

export default {
    title: 'FontSizeDropdown',
    component: FontSizeDropdown
} satisfies Meta<FontSizeDropdownType>

const FontSizeDropdownWithState = () => {
    const [fontSize, setFontSize] = useState('medium')

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <FontSizeDropdown fontSize={fontSize} setFontSize={setFontSize} />
        </div>
    )
}

export const Default: StoryObj<FontSizeDropdownType> = {
    render: () => <FontSizeDropdownWithState />
}

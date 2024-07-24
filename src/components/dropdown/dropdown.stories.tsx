import { Dropdown } from './dropdown'

import type { Meta, StoryObj } from '@storybook/react'

type DropdownType = typeof Dropdown

export default {
    title: 'Dropdown',
    component: Dropdown
} satisfies Meta<DropdownType>

export const Default: StoryObj<DropdownType> = {
    render: () => <Dropdown />
}

import { NavSidebar } from './nav-sidebar'

import type { Meta, StoryObj } from '@storybook/react'

type NavSidebarType = typeof NavSidebar

export default {
    title: 'NavSidebar',
    component: NavSidebar
} satisfies Meta<NavSidebarType>

export const Default: StoryObj<NavSidebarType> = {
    render: () => <NavSidebar />
}

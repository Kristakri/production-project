import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { withTranslation } from 'react-i18next'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('Render Sidebar', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    componentRender(<SidebarWithTranslation />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Toggle Sidebar', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})

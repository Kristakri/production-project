import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { withTranslation } from 'react-i18next'
import {
  renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('Render Sidebar', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    renderWithTranslation(<SidebarWithTranslation />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Toggle Sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})

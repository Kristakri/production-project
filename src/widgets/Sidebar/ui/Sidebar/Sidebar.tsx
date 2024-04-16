import { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}>
          {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
})

import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { t } = useTranslation()

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
      <button data-testid="sidebar-toggle" onClick={onToggle}>{t('toggle')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

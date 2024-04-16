import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from '../../model/items'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarItemProps {
  item?: SidebarItemType,
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps): JSX.Element => {
  const { item, collapsed } = props;
  const { t } = useTranslation()
  return (
    <AppLink
      className={classNames(cls.item, {[cls.collapsed]: collapsed})}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}>
        <div className={cls.link}>
          <item.Icon className={cls.icon} />
          <span className={cls.linkText}>{t(item.text)}</span>
        </div>
    </AppLink>
  );
});
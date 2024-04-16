import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: string
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export const Text = memo((props: TextProps): JSX.Element => {
  const { className, title, text, theme = TextTheme.PRIMARY } = props
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      <p className={cls.title}>{title}</p>
      <p className={cls.text}>{text}</p>
    </div>
  )
})

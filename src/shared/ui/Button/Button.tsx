import { ReactNode, type ButtonHTMLAttributes, type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme,
    children,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled
  }

  return (
    <button
      className={classNames(cls.Button, mods,
        [className, cls[theme], cls[size]])}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  )
})

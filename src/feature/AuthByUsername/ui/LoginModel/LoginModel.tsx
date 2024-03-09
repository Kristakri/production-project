import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModel.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModelProps {
  className?: string
  isOpen?: boolean
  onClose: () => void
}

export const LoginModel = (props: LoginModelProps): JSX.Element => {
  const { className, isOpen, onClose } = props
  return (
    <Modal
      className={classNames(cls.LoginModel, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  )
}

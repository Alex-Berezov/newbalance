import React, { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface ButtonProps {
  children: ReactNode
  filled: boolean
}

const Button: FC<ButtonProps> = ({ children, filled }) => {
  return <Styled.Root filled={filled}>{children}</Styled.Root>
}

export default Button

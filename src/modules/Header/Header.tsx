import React, { FC } from 'react'
import Navbar from '../../components/Navbar'
import Logo from '../../UI/Logo/Logo'
import * as Styled from './styles'

const Header: FC = () => {
  return (
    <Styled.Root>
      <Logo />
      <Navbar />
    </Styled.Root>
  )
}

export default Header

import React from 'react'
import * as Styled from './styles'
import logo from '../../assets/images/logo.png'

const Logo = () => {
  return (
    <Styled.Root>
      <Styled.LogoImage src={logo} />
    </Styled.Root>
  )
}

export default Logo

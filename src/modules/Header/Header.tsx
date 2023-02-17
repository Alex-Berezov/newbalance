import React, { FC } from 'react'
import Logo from '../../UI/Logo/Logo'
import * as Styled from './styles'
import SearchForm from '../../components/SearchForm/SearchForm'
import HeaderCartButton from '../../UI/HeaderCartButton/HeaderCartButton'

const Header: FC = () => {
  return (
    <Styled.Root>
      <Logo />
      <SearchForm />
      <HeaderCartButton />
    </Styled.Root>
  )
}

export default Header

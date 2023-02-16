import React, { FC } from 'react'
import * as Styled from './styles'

interface NavbarProps {
  navListItems: string[]
}

const Navbar: FC<NavbarProps> = ({ navListItems }) => {
  return (
    <Styled.Root>
      {navListItems.map((item) => (
        <Styled.NavListItem key={item}>{item}</Styled.NavListItem>
      ))}
    </Styled.Root>
  )
}

export default Navbar

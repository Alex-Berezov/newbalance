import React, { FC, useState } from 'react'
import * as Styled from './styles'

interface NavbarProps {
  navListItems: string[]
}

const Navbar: FC<NavbarProps> = ({ navListItems }) => {
  const [activeNavItem, setActiveNavItem] = useState(0)

  const selectNavItem = (i: number) => {
    setActiveNavItem(i)
  }

  return (
    <Styled.Root>
      {navListItems.map((item, i) => (
        <Styled.NavListItem
          key={item}
          className={activeNavItem === i ? 'active' : ''}
          onClick={() => selectNavItem(i)}
        >
          {item}
        </Styled.NavListItem>
      ))}
    </Styled.Root>
  )
}

export default Navbar

import React, { FC, useState } from 'react'
import * as Styled from './styles'
import DropDown from '../../UI/DropDown/DropDown'

interface NavbarProps {
  navListItems: string[]
}

const Navbar: FC<NavbarProps> = ({ navListItems }) => {
  const [activeNavItem, setActiveNavItem] = useState(0)

  const selectNavItem = (i: number) => {
    setActiveNavItem(i)
  }

  const sortList = [
    'Most Popular',
    'Price (High-Low)',
    'Price(Low - High)',
    'Name(A-Z)',
    'Name(Z-A)',
  ]

  return (
    <Styled.Root>
      <Styled.NavList>
        {navListItems.map((item, i) => (
          <Styled.NavListItem
            key={item}
            className={activeNavItem === i ? 'active' : ''}
            onClick={() => selectNavItem(i)}
          >
            {item}
          </Styled.NavListItem>
        ))}
      </Styled.NavList>
      <Styled.Sort>
        <DropDown sortList={sortList} />
      </Styled.Sort>
    </Styled.Root>
  )
}

export default Navbar

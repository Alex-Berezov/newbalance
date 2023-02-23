import React, { FC, useState } from 'react'
import * as Styled from './styles'
import DropDown from '../../UI/DropDown/DropDown'

const Navbar: FC = () => {
  const [activeNavItem, setActiveNavItem] = useState(0)

  const selectNavItem = (i: number) => {
    setActiveNavItem(i)
  }

  const navListItems = ['All', 'Men', 'Women', 'Kids', 'Sale']
  const isSingleProductPage = true
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
      {isSingleProductPage ? null : (
        <Styled.Sort>
          <DropDown sortList={sortList} />
        </Styled.Sort>
      )}
    </Styled.Root>
  )
}

export default Navbar

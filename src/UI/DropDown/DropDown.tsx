import React, { useState } from 'react'
import * as Styled from './styles'

import caret from '../../assets/images/caret.svg'

const DropDown = () => {
  const sortList = [
    'Most Popular',
    'Price (High-Low)',
    'Price(Low - High)',
    'Name(A-Z)',
    'Name(Z-A)',
  ] as const

  return (
    <Styled.Root>
      <Styled.SortLabel>
        <Styled.SortCaret src={caret} alt='Caret' />
        <Styled.LabelText>Sort by:</Styled.LabelText>
        <Styled.DefaultSelectedLabel>Most Popular</Styled.DefaultSelectedLabel>
      </Styled.SortLabel>
      <Styled.SortPopup>
        <Styled.SortPopupList>
          {sortList.map((item) => {
            ;<Styled.SortPopupListItem key={item}>
              {item}
            </Styled.SortPopupListItem>
          })}
        </Styled.SortPopupList>
      </Styled.SortPopup>
    </Styled.Root>
  )
}

export default DropDown

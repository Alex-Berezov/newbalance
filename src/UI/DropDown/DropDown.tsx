import React, { FC, useState } from 'react'
import * as Styled from './styles'

import caret from '../../assets/images/caret.svg'

interface DropDownProps {
  sortList: string[]
}

const DropDown: FC<DropDownProps> = ({ sortList }) => {
  const [activeSortPopup, setActiveSortPopup] = useState(false)
  const [selectedSortItem, setSelectedSortItem] = useState(0)

  const chengeSortItem = (i: number) => {
    setSelectedSortItem(i)
    setActiveSortPopup(false)
  }

  const openSortPopup = () => {
    setActiveSortPopup(!activeSortPopup)
  }

  return (
    <Styled.Root>
      <Styled.SortLabel>
        <Styled.SortCaret
          src={caret}
          alt='Caret'
          className={activeSortPopup ? 'active' : ''}
        />
        <Styled.LabelText>Sort by:</Styled.LabelText>
        <Styled.DefaultSelectedLabel onClick={openSortPopup}>
          {sortList[selectedSortItem]}
        </Styled.DefaultSelectedLabel>
      </Styled.SortLabel>

      {activeSortPopup && (
        <Styled.SortPopup>
          <Styled.SortPopupList>
            {sortList.map((item, i) => (
              <Styled.SortPopupListItem
                key={item}
                className={selectedSortItem === i ? 'active' : ''}
                onClick={() => chengeSortItem(i)}
              >
                {item}
              </Styled.SortPopupListItem>
            ))}
          </Styled.SortPopupList>
        </Styled.SortPopup>
      )}
    </Styled.Root>
  )
}

export default DropDown

import React from 'react'
import * as Styled from './styles'

import searchIcon from '../../assets/images/searchIcon.svg'

const SearchFormInput = () => {
  return (
    <Styled.Root>
      <Styled.Input placeholder='Search' />
      <Styled.SearchIcon src={searchIcon} alt='Search icon' />
    </Styled.Root>
  )
}

export default SearchFormInput

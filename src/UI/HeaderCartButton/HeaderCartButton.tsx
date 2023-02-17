import React from 'react'
import * as Styled from './styled'

import cartIcon from '../../assets/images/cartIcon.svg'

const HeaderCartButton = () => {
  return (
    <Styled.Root>
      <Styled.Link href='#'>
        <Styled.ButtonLeft>$ 1 000</Styled.ButtonLeft>
        <Styled.ButtonSeparator />
        <Styled.ButtonRight>
          <Styled.CartIcon src={cartIcon} alt='Cart Icon' /> 2
        </Styled.ButtonRight>
      </Styled.Link>
    </Styled.Root>
  )
}

export default HeaderCartButton

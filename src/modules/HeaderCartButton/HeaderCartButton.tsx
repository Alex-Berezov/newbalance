import React from 'react'
import * as Styled from './styled'
import { Button } from '../../UI/Button'

import cartIcon from '../../assets/images/cartIcon.svg'

const HeaderCartButton = () => {
  return (
    <Styled.Root>
      <Styled.Link href='#'>
        <Button filled={true}>
          <Styled.ButtonLeft>$ 1 000</Styled.ButtonLeft>
          <Styled.ButtonSeparator />
          <Styled.ButtonRight>
            <Styled.CartIcon src={cartIcon} alt='Cart Icon' /> 2
          </Styled.ButtonRight>
        </Button>
      </Styled.Link>
    </Styled.Root>
  )
}

export default HeaderCartButton

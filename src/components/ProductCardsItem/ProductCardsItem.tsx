import React, { FC } from 'react'
import * as Styled from './styles'

import product1 from '../../assets/images/product1.png'

const ProductCardsItem: FC = () => {
  return (
    <Styled.Root>
      <Styled.ProductWrapper href='#'>
        <Styled.ProductImage src={product1} alt='Product Image' />
        <Styled.ProductInfo>
          <Styled.ProductTitle>
            Uni-ssentials Warped Classics French Terry Hoodie
          </Styled.ProductTitle>
          <Styled.ProductPrice>$109.99</Styled.ProductPrice>
        </Styled.ProductInfo>
      </Styled.ProductWrapper>
    </Styled.Root>
  )
}

export default ProductCardsItem

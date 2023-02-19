import React, { FC } from 'react'
import * as Styled from './styles'
import ProductCardsItem from './../../components/ProductCardsItem/ProductCardsItem'

const ProductCardsBlock: FC = () => {
  return (
    <Styled.Root>
      <ProductCardsItem />
      <ProductCardsItem />
      <ProductCardsItem />
      <ProductCardsItem />
    </Styled.Root>
  )
}

export default ProductCardsBlock

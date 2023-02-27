import React, { FC } from 'react'
import * as Styled from './styles'
import ImagesViewer from './../ImagesViewer/ImagesViewer'
import ProductInfo from './../ProductInfo/ProductInfo'

const ProductContent: FC = () => {
  return (
    <Styled.Root>
      <Styled.Media>
        <ImagesViewer />
      </Styled.Media>
      <Styled.Content>
        <ProductInfo />
      </Styled.Content>
    </Styled.Root>
  )
}

export default ProductContent

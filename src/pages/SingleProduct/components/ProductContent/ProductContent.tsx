import React, { FC } from 'react'
import * as Styled from './styles'
import ImagesViewer from './../ImagesViewer/ImagesViewer'

const ProductContent: FC = () => {
  return (
    <Styled.Root>
      <Styled.Media>
        <ImagesViewer />
      </Styled.Media>
      <Styled.Content>Content part</Styled.Content>
    </Styled.Root>
  )
}

export default ProductContent

import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const Category = styled.p`
  margin-left: auto;
`

export const Name = styled.h1``

export const Price = styled.span`
  font-weight: 700;
`

export const ColorBlock = styled.div``

export const ColorName = styled.p``

export const ColorsPreviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const ColorImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;

  &.selected {
    border-bottom: 3px solid red;
  }
`

export const SizeBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const SizeBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SizeBlockHeaderTitle = styled.p``

export const SizeBlockSizeGuide = styled.p`
  text-decoration: underline;
`

export const SizeValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const SizeValuesItem = styled.div``

export const AddToCartButtonBlock = styled.div``

export const AddToCartButton = styled.div``

export const AddToCartButtonInfo = styled.div`
  display: flex;
  align-items: center;
`

export const SelectedColor = styled.p``

export const SelectedSize = styled.p``

export const SelectedPrice = styled.p``

export const Description = styled.div``

export const AccordionBlock = styled.div``

import React from 'react'
import * as Styled from './styles'

import product1 from '../../../../assets/images/574CoreGrey/574-core-1.png'
import product2 from '../../../../assets/images/574CoreGrey/574-core-1.png'
import product3 from '../../../../assets/images/574CoreGrey/574-core-1.png'

const ProductInfo = () => {
  const sizeValues = [
    4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13,
    14, 15,
  ]

  return (
    <Styled.Root>
      <Styled.Category>Men's</Styled.Category>

      <Styled.Name>574 Core</Styled.Name>

      <Styled.Price>$84.99</Styled.Price>

      <Styled.ColorBlock>
        <Styled.ColorName>
          <b>Color:</b> Grey with white
        </Styled.ColorName>
        <Styled.ColorsPreviews>
          <Styled.ColorImage src={product1} className='selected' />
          <Styled.ColorImage src={product2} />
          <Styled.ColorImage src={product3} />
        </Styled.ColorsPreviews>
      </Styled.ColorBlock>

      <Styled.SizeBlock>
        <Styled.SizeBlockHeader>
          <Styled.SizeBlockHeaderTitle>Select size</Styled.SizeBlockHeaderTitle>
          <Styled.SizeBlockSizeGuide>
            Size & fit guide
          </Styled.SizeBlockSizeGuide>
        </Styled.SizeBlockHeader>

        <Styled.SizeValues>
          {sizeValues.map((el) => (
            <Styled.SizeValuesItem key={el}>{el}</Styled.SizeValuesItem>
          ))}
        </Styled.SizeValues>
      </Styled.SizeBlock>

      <Styled.AddToCartButtonBlock>
        <Styled.AddToCartButton>Add to cart</Styled.AddToCartButton>
        <Styled.AddToCartButtonInfo>
          <Styled.SelectedColor>
            <b>Color:</b> Grey with white
          </Styled.SelectedColor>
          <Styled.SelectedSize>
            <b>Size:</b> 4
          </Styled.SelectedSize>
          <Styled.SelectedPrice>
            <b>Price:</b> $84.99
          </Styled.SelectedPrice>
        </Styled.AddToCartButtonInfo>
      </Styled.AddToCartButtonBlock>

      <Styled.Description>
        <b>Description</b>
        <p>
          ‘The most New Balance shoe ever’ says it all, right? No, actually. The
          574 might be our unlikeliest icon. The 574 was built to be a reliable
          shoe that could do a lot of different things well rather than as a
          platform for revolutionary technology, or as a premium materials
          showcase. This unassuming, unpretentious versatility is exactly what
          launched the 574 into the ranks of all-time greats. As hybrid
          road/trail design built on a wider last than the previous generation’s
          narrow racing silhouettes, the 574 offered a uniquely versatile mix of
          new, different, uncomplicated, rugged, durable, and comfortable that
          was adopted as a closet staple across the globe. That’s why today, the
          574 is synonymous with the boundary defying New Balance style, and
          worn by anyone.
        </p>
      </Styled.Description>

      <Styled.AccordionBlock>
        <hr />
        AccordionBlock
        <hr />
      </Styled.AccordionBlock>
    </Styled.Root>
  )
}

export default ProductInfo

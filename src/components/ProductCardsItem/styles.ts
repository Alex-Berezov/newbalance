import styled from 'styled-components'
import { scRespondTo } from '../../utils/mediaQuerys'

export const Root = styled.div`
  width: 32%;
  margin: 50px 0;

  ${scRespondTo.sm} {
    width: 49%;
  }

  ${scRespondTo.xs} {
    width: 100%;
  }
`

export const ProductWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`

export const ProductImage = styled.img``

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const ProductTitle = styled.span`
  margin-right: 10px;
`

export const ProductPrice = styled.span``

import styled from 'styled-components'
import { scRespondTo } from './../../utils/mediaQuerys'

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`

export const NavList = styled.div`
  display: flex;
  align-items: center;
`

export const NavListItem = styled.a`
  margin-right: 20px;
  cursor: pointer;

  &.active {
    color: #cf0a2c;
    border-bottom: 0.15rem solid #cf0a2c;
  }
`

export const Sort = styled.div`
  ${scRespondTo.xs} {
    margin: 20px 0 0 -5px;
  }
`

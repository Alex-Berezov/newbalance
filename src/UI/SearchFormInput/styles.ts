import styled from 'styled-components'
import { scRespondTo } from './../../utils/mediaQuerys'

export const Root = styled.div`
  display: flex;
  position: relative;

  ${scRespondTo.xs} {
    margin: 25px 0;
  }
`

export const Input = styled.input`
  position: relative;
  width: 250px;
  height: 30px;
  outline: none;
  background-color: #ededed;
  font-weight: bold;
  border: 1px solid gray;
  padding: 3px 5px;
`

export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 3px;
  right: 5px;
`

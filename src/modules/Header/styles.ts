import styled from 'styled-components'
import { scRespondTo } from '../../utils/mediaQuerys'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  ${scRespondTo.xs} {
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
  }
`

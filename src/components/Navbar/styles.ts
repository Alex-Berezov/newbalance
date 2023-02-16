import styled from 'styled-components'

export const Root = styled.ul`
  display: flex;
  align-items: center;
`

export const NavListItem = styled.li`
  &:not():last-child() {
    margin-right: 15px;
  }
`

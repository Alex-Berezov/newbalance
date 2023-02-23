import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 50px 0;
`

export const BreadcrumbsLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const BreadcrumbsSeparator = styled.span`
  margin: 0 10px;
`

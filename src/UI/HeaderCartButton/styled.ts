import styled from 'styled-components'

export const Root = styled.div``

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 25px;
  text-decoration: none;
  background-color: #cf0a2c;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  min-width: 100px;
  text-align: center;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  user-select: none;
`
export const ButtonLeft = styled.span`
  display: flex;
  align-items: center;
  color: #ffffff;
`

export const ButtonSeparator = styled.div`
  background-color: #ffffff;
  height: 25px;
  width: 1px;
  margin: 0 10px;
`

export const CartIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`

export const ButtonRight = styled.span`
  display: flex;
  align-items: center;
  color: #ffffff;
`

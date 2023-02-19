import styled from 'styled-components'

interface ButtonProps {
  filled: boolean
}

export const Root = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 25px;
  text-decoration: none;
  background-color: ${(props) => (props.filled ? '#cf0a2c' : 'transparent')};
  border: 1px solid #cf0a2c;
  border-radius: 30px;
  cursor: pointer;
  min-width: 100px;
  text-align: center;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  user-select: none;
`

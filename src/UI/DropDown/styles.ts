import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
`

export const SortLabel = styled.div`
  display: flex;
  align-items: center;
  min-width: 225px;
`

export const SortCaret = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;

  &.active {
    transform: rotate(180deg);
  }
`

export const LabelText = styled.b``

export const DefaultSelectedLabel = styled.span`
  margin-top: 4px;
  margin-left: 5px;
  border-bottom: 1px dashed #cf0a2c;
  cursor: pointer;
`

export const SortPopup = styled.div``

export const SortPopupList = styled.ul`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 0;
`

export const SortPopupListItem = styled.li`
  margin-top: 10px;
  cursor: pointer;
  list-style: none;

  &:hover {
    color: #cf0a2c;
  }

  &.active {
    color: #cf0a2c;
  }
`

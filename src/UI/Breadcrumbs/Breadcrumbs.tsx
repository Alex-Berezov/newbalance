import React from 'react'
import * as Styled from './styles'

const Breadcrumbs = () => {
  const breadcrumbsLinks = ['Men', 'Shoes', '574 Core']

  return (
    <Styled.Root>
      {breadcrumbsLinks.map((el) => (
        <div key={el}>
          <Styled.BreadcrumbsLink>{el}</Styled.BreadcrumbsLink>
          {el === breadcrumbsLinks[breadcrumbsLinks.length - 1] ? null : (
            <Styled.BreadcrumbsSeparator>/</Styled.BreadcrumbsSeparator>
          )}
        </div>
      ))}
    </Styled.Root>
  )
}

export default Breadcrumbs

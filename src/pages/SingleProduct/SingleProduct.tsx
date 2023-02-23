import React from 'react'
import * as Styled from './styles'
import Header from './../../modules/Header/Header'
import Navbar from './../../modules/Navbar/Navbar'
import Breadcrumbs from './../../UI/Breadcrumbs/Breadcrumbs'

const SingleProduct = () => {
  return (
    <Styled.Root>
      <Header />
      <Navbar />
      <Breadcrumbs />
    </Styled.Root>
  )
}

export default SingleProduct

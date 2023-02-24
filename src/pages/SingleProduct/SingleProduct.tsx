import React from 'react'
import * as Styled from './styles'
import Header from './../../modules/Header/Header'
import Navbar from './../../modules/Navbar/Navbar'
import Breadcrumbs from './../../UI/Breadcrumbs/Breadcrumbs'
import ProductContent from './components/ProductContent/ProductContent'

const SingleProduct = () => {
  return (
    <Styled.Root>
      <Header />
      <Navbar />
      <Breadcrumbs />
      <ProductContent />
    </Styled.Root>
  )
}

export default SingleProduct

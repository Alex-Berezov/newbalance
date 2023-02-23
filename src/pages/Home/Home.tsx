import React from 'react'
import { Header } from '../../modules/Header'
import Navbar from '../../modules/Navbar/Navbar'
import ProductCardsBlock from './../../modules/ProductCardsBlock/ProductCardsBlock'

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductCardsBlock />
    </div>
  )
}

export default Home

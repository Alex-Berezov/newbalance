import React from 'react'
import { Header } from '../../modules/Header'
import Navbar from '../../modules/Navbar/Navbar'
import ProductCardsBlock from './../../modules/ProductCardsBlock/ProductCardsBlock'

const Home = () => {
  const navListItems = ['All', 'Men', 'Women', 'Kids', 'Sale']

  return (
    <div>
      <Header />
      <Navbar navListItems={navListItems} />
      <ProductCardsBlock />
    </div>
  )
}

export default Home

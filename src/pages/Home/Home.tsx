import React from 'react'
import { Header } from '../../modules/Header'
import Navbar from '../../modules/Navbar/Navbar'

const Home = () => {
  const navListItems = ['New', 'Men', 'Women', 'Kids', 'Sale']

  return (
    <div>
      <Header />
      <Navbar navListItems={navListItems} />
    </div>
  )
}

export default Home

import React, { FC } from 'react'
import { Home } from './pages/Home'
import SingleProduct from './pages/SingleProduct/SingleProduct'

const App: FC = () => {
  return (
    <div className='app'>
      {/* <Home /> */}
      <SingleProduct />
    </div>
  )
}

export default App

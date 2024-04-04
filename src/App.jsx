import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Header from './layout/Header'
import Main from './layout/Main'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <div className='container '>
        <Main />
      </div>
    </BrowserRouter>

  )
}

export default App
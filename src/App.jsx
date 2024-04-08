import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Main />
      <Footer/>
    </BrowserRouter>

  )
}

export default App
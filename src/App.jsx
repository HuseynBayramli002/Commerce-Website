import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import SignUp from './common/Pages/SignUp'
import SignIn from './common/Pages/SignIn'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Compiler from './compiler/Compiler'
const page = () => {
  return (
    <>
    <Navbar/>
    <Compiler/>
    <Footer/>
       </>
  )
}

export default page
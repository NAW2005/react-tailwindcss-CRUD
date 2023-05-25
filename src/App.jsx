import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Form from './components/Form'

const App = () => {
  const datas = ["one", "two", "three"]
  return (
    <div className='w-[90%] mx-auto p-5 space-y-5'>
      <Nav />
      <Footer />
      
    </div>

  )
}

export default App
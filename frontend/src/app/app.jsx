import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import { HashRouter as BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import './header.scss'

import NavItem from './components/nav-item'

const Header = () => {
  const [title, setTitle] = useState(window.location.hash.slice(2))
  const [pages] = useState(['Home', 'About Us'])

  const handleChangeNav = (i) => {
    if (i === 0) {
      setTitle('Home')
      return 'Home'
    } else {
      setTitle('AboutUs')
      return 'AboutUs'
    }
  }

  return (
    <header id="Top" className="header-wrap">
      <div className="header">
        <div className="login-container">
          <ul id="nav" className="nav">
            {pages.map((pageName, index) => (
              <NavItem
                i={index}
                title={title}
                handleChangeNav={handleChangeNav}
                pageName={pageName}
                pages={pages}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

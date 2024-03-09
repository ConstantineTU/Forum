import * as React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
  return (
    <li className="nav__item">
      <NavLink
        id={`navLink-${props.i}`}
        onClick={() => props.handleChangeNav(props.i)}
        className={(navData) => (navData.isActive ? 'nav__link active' : 'nav__link')}
        to={`${props.pageName.split(' ').join('')}`}
      >
        {props.pageName}
      </NavLink>
    </li>
  )
}

export default NavItem

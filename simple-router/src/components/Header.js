import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate between routes.

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/pirates'>Pirates</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header

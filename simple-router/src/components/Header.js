import React from 'react'
import { NavLink } from 'react-router-dom'

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
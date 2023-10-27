import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navi'>
        <NavLink to='/' className='home'>Home</NavLink>
        <NavLink className='login'>Log in</NavLink>
    </nav>
  )
}

export default NavBar
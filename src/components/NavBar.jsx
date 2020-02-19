import React from 'react'
import { NavLink as NL } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
          <NL exact to='/'>Home</NL>  
          <NL to='/about'>About</NL>
        </div>
    )
}

export default NavBar

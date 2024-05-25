import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="child">
                <NavLink to='/' className='link'>Home</NavLink>
            </div>
            <div className="child">
                <NavLink to='/hello-fresh' className='link'>Hello Fresh</NavLink>
            </div>
        </div>
    )
}

export default Navbar
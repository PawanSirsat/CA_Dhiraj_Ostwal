import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)

  const handleMouseEnter = () => {
    setDropdown(true)
  }

  const handleMouseLeave = () => {
    setDropdown(false)
  }

  return (
    <nav className='navbar'>
      <Link to='/' className='nav-logo'>
        MyWebsite
      </Link>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link to='/' className='nav-links'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/gallery' className='nav-links'>
            Gallery
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/awards' className='nav-links'>
            Awards
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='nav-links'>
            Contact
          </Link>
        </li>
        <li
          className='nav-item'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className='nav-links'>Services</span>
          {dropdown && (
            <ul className='dropdown-menu'>
              <li>
                <Link to='/services/ca' className='dropdown-link'>
                  CA Firm
                </Link>
              </li>
              <li>
                <Link to='/services/legal' className='dropdown-link'>
                  Legal Advisory
                </Link>
              </li>
              <li>
                <Link to='/services/startup' className='dropdown-link'>
                  Startup
                </Link>
              </li>
              <li>
                <Link to='/services/investor' className='dropdown-link'>
                  Investor
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

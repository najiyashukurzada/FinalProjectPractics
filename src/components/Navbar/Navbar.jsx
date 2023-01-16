import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <>
    <header>
        <nav>
            <div className="nav">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" alt="spotify"/>
            </div>
            <div className='right'>
                <Link to="/" className='link'>Add Products</Link>
                <Link to="/products" className='link'>Products</Link>
            </div>
        </nav>
    </header>
       
    </>
  )
}

export default Navbar
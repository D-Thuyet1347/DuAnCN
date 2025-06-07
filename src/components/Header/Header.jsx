import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <div className="left-container">
            <h1 className="blog-title">My Blog</h1>
        </div>
        <div className="menu-container">
            <ul className="menu-list">
                <li className="menu-item"><a href="/">Home</a></li>
                <li className="menu-item"><a href="/about">About</a></li>
                <li className="menu-item"><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className="right-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button">Search</button>
        </div>  
    </>
  )
}

export default Header
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div className='header'>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/post'>Post</NavLink>
            </div>
            <p>Common Header</p>
        </nav>
    );
};

export default Header;
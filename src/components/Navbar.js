import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className='main-nav'>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><Link to="/#menu">Menu</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><NavLink to="/booking">Reservation</NavLink></li>
            </ul>
            <div className='burger' onClick={toggleMenu}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            </div>
        </nav>
    )
}
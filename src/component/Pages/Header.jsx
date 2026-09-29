import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <header className='w'>
            <div className="navbar">
                <div className="logo">
                    <img src="logo.jpeg" alt="" />
                    <div>Coffee</div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className='bars' onClick={() => setIsActive(!isActive)}><FaBars /></div>

                {
                    isActive && (
                        <ul className='mobileMenu'>
                            <li>
                                <a href="#hero" onClick={() => setIsActive(!isActive)}>Home</a>
                            </li>
                            <li>
                                <a href="#about" onClick={() => setIsActive(!isActive)}>About</a>
                            </li>
                            <li>
                                <a href="#menu" onClick={() => setIsActive(!isActive)}>Menu</a>
                            </li>
                            <li>
                                <a href="#testimonials" onClick={() => setIsActive(!isActive)}>Testimonials</a>
                            </li>
                            <li>
                                <a href="#gallery" onClick={() => setIsActive(!isActive)}>Gallery</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => setIsActive(!isActive)}>Contact</a>
                            </li>
                            <div className='close' onClick={() => setIsActive(!isActive)}>&times;</div>
                        </ul>
                    )
                }
            </div>
        </header>
    )
}

export default Header
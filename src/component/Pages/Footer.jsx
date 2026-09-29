import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='footer w'>
            <div className="container">
                <p>&copy; 2026 Coffee Shop</p>
                <div className="icons">
                    <span><FaFacebook /></span>
                    <span><IoLogoInstagram /></span>
                    <span><IoLogoLinkedin /></span>
                </div>
                <div>Privacy policy . Refund policy</div>
            </div>
        </div>
    )
}

export default Footer
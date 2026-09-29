import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container reverse">
                <div className="image">
                    <img src="about-image.jpg" alt="" />
                </div>
                <div className="content">
                    <h2 className='center'>ABOUT US</h2>
                    <p className='abt'>At Coffee House in Berndorf, Germany, we pride ourselves on being a go-to destination for coffee lovers and conversation seekers alike. We're dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.</p>
                    <div className="icons">
                       <span><FaFacebook /></span> 
                       <span><IoLogoInstagram /></span> 
                       <span><IoLogoLinkedin /></span> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
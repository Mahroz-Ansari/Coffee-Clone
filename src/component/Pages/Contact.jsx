import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { FaGlobe } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";

const Contact = () => {
    return (
        <div className='contact w bg' id='contact'>
            <h2 className='center'>CONTACT US</h2>
            <div className="container reverse">
                <div className="detail">
                    <div className="info">
                        <BiTargetLock />
                        <span>123 Campsite Avenue, Wilderness, CA 98765</span>
                    </div>
                    <div className="info">
                        <FiMail />
                        <span>info@coffeeshopwebsite.com</span>
                    </div>
                    <div className="info">
                        <FaPhoneAlt />
                        <span>(123) 456-78900</span>
                    </div>
                    <div className="info">
                        <GoClock />
                        <span>Monday-Friday: 9:00 AM 5:00 PM</span>
                    </div>
                    <div className="info">
                        <GoClock />
                        <span>Saturday: 10:00 AM 3:00 PM</span>
                    </div>
                    <div className="info">
                        <GoClock />
                        <span>Sunday: Closed</span>
                    </div>
                    <div className="info">
                        <FaGlobe />
                        <span>www.codingnepalweb.com</span>
                    </div>
                </div>
                <form action="">
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Your email' />
                    <textarea placeholder='Your message'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact


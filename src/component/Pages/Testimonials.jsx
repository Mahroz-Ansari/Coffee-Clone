import React, { useState } from 'react'
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { testimonialsApi } from '../Api/testimonials'

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const { name, image, description } = testimonialsApi[index];
    const handlePrev = () => {
        setIndex((prev) => prev === 0 ? testimonialsApi.length - 1 : prev - 1)
    }



    const handleNext = () => {
        setIndex((prev) => prev === testimonialsApi.length - 1  ? 0 : prev + 1)
    }
    return (
        <div className='testimonials w bg' id='testimonials'>
            <h2 className='center'>TESTIMONIALS</h2>
            <div className="container">
                <span><BsChevronLeft onClick={handlePrev} /></span>
                <div className="profile">
                    <div className='card'>
                        <img src={image} alt="" />
                        <h5>{name}</h5>
                        <p>"{description}"</p>
                    </div>
                </div>
                <span><BsChevronRight onClick={handleNext} /></span>
            </div></div>
    )
}

export default Testimonials
import React from 'react'

const Hero = () => {
  return (
    <section className='hero w' id='hero'>
       <div className="container reverse">
        <div className="content">
            <p className='para'>Best Coffee</p>
            <h1>Make your day great with our special coffee!</h1>
            <p>Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
            <div className="btns">
                <button className='btn1'>Order Now</button>
                <button className='btn'>Contact Us</button>
            </div>
        </div>
        <div className="image">
            <img src="coffee-hero-section.png" alt="" />
        </div>
       </div>
    </section>
  )
}

export default Hero
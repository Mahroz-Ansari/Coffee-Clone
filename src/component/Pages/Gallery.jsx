import React from 'react'


const Gallery = () => {
  return (
    <div className='gallery w bg' id='gallery'>
      <h2 className='center'>GALLERY</h2>
      <div className="photos">
        <div class="img-container">
          <img src="gallery-1.jpg" alt="" />
        </div>
        <div class="img-container">
          <img src="gallery-2.jpg" alt="" />
        </div>

        <div class="img-container">
          <img src="gallery-3.jpg" alt="" />
        </div>
        <div class="img-container">
          <img src="gallery-4.jpg" alt="" />
        </div>
        <div class="img-container">
          <img src="gallery-5.jpg" alt="" />
        </div>

        <div class="img-container">
          <img src="gallery-6.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
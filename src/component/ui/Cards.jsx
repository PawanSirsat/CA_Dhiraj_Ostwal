import React from 'react'
import './cards.css' // Make sure to adjust the path if necessary

const CardSlider = () => {
  return (
    <div className='slide-container'>
      <div className='slide-content'>
        {Array.from({ length: 9 }, (_, index) => (
          <div className='card' key={index}>
            <div className='card-content-wrapper'>
              <h2 className='name'>David Dell</h2>

              <div className='image-content'>
                <span className='overlay'></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='navBtn left'>&lt;</div>
      <div className='navBtn right'>&gt;</div>
    </div>
  )
}

export default CardSlider

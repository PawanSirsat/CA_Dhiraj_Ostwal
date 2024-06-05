import React, { useEffect } from 'react'
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const Slideshow2 = () => {
  useEffect(() => {
    new Swiper('.slide-content', {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    })
  }, [])

  return (
    <div className='slide-container swiper'>
      <div className='slide-content'>
        <div className='card-wrapper swiper-wrapper'>
          {Array.from({ length: 9 }, (_, index) => (
            <div className='card swiper-slide' key={index}>
              <div className='image-content'>
                <span className='overlay'></span>
                <div className='card-image'>
                  {/* Uncomment and replace with actual image paths */}
                  {/* <img src={`images/profile${index + 1}.jpg`} alt="" className="card-img" /> */}
                </div>
              </div>
              <div className='card-content'>
                <h2 className='name'>David Dell</h2>
                <p className='description'>
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>
                <button className='button'>View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='swiper-button-next swiper-navBtn'></div>
      <div className='swiper-button-prev swiper-navBtn'></div>
      <div className='swiper-pagination'></div>
    </div>
  )
}

export default Slideshow2

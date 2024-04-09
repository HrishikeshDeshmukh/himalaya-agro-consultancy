import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'



export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="info-wrap">
            <h1>Fresh From The Farm
              Delivered To Your Door</h1>
            <p>Great Fruit and Veg, Made Easy!</p>
            <button className='button'>Purchase Now</button>
          </div>
        </div>

        <div className="embla__slide">
          <div className="info-wrap">
            <h1>Your Journey to Fresh Fruits Starts Here!</h1>
            <p>Great Fruit and Veg, Made Easy!</p>
            <button className='button'>Purchase Now</button>
          </div>
        </div>
        <div className="embla__slide">
        <div className="info-wrap">
          <h1>Your Journey to Fresh Fruits Starts Here!</h1>
          <p>Great Fruit and Veg, Made Easy!</p>
          <button className='button'>Purchase Now</button>
        </div>

      </div>
      <div className="embla__slide"><h1>Your Journey to Fresh Fruits Starts Here!</h1></div>
    </div>
    </div >
  )
}

export default Carousel

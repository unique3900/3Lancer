import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { companyLogo } from '../../data/CarouselData';
const HeroBrands = () => {

    // Carousel Responsiveness
    const responsive = {
        0: {
            items:3,
        },
        1100: {
            items:5,
        }
    }

    const carouselItems = companyLogo.map((item, index) => (
        <img className='w-32 h-32 object-contain py-5' src={item} alt='logo'/>
    ))
  return (
    <div className='absolute bottom-0 h-44 flex flex-col items-center gap-4 py-4  w-full bg-white  '>
        <h3 className="text-3xl font-bold ">Get Placed in Top-Most Companies</h3>
          <AliceCarousel
              mouseTracking
              infinite
              autoPlayInterval={1000}
              animationDuration={800}
              disableDotsControls
              responsive={responsive}
              autoPlay
              items={carouselItems}
              autoHeight
              disableButtonsControls

          
          />
    </div>
  )
}

export default HeroBrands

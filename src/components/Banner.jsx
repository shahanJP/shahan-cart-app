import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './banner.css'
const Banner = () => {
    return (
  
    
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img"
            src="https://wallpapercave.com/wp/wp3631252.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 >ON OFFER</h1>
            <h1>50% off LIMITED OFFER.</h1>
            <h3>Sales end December 26! </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img"
            src="https://unwiredforsound.com/wp-content/uploads/2020/11/JBL-CLUB-ONE-1-1327x885.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h1>ON Offer</h1>
            <h1>50% off LIMITED OFFER.</h1>
            <h3>Sales end December 26! </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src="https://www.kopfhoerer.de/wp-content/uploads/tps_1281_302355_20942-302355-1920x1080.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1>ON Offer</h1>
            <h1>50% off LIMITED OFFER.</h1>
            <h3>Sales end December 26! </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
      );
}

export default Banner

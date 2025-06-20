import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getImageBrightness } from '../utils/getImageBrightness';
import Button from "react-bootstrap/Button";
import './DynamicSwiper.css';

const slides = [
  { image: require('../assets/images/carousel-1.png'), title: 'Get Free Deliver Your Order At Home', desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.' },
  { image: require('../assets/images/carousel-2.png'), title: 'Fresh Fruits in Your City with Free Deliver', desc: 'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.' },
  { image: require('../assets/images/pexels-michal-kunik-85164219-11946471.jpg'), title: 'Get Fresh Fruits & Vegetables', desc: 'Nemo enim ipsam voluptatem quia voluptas sit.' },
];

const DynamicSwiper = () => {
  const [textColors, setTextColors] = useState("555");

  useEffect(() => {
    const checkBrightness = async () => {
      const results = await Promise.all(
        slides.map((slide) => getImageBrightness(slide.image))
      );
      setTextColors(results.map((b) => (b < 128 ? 'white' : 'black')));
    };
    checkBrightness();
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '410px',
              color: textColors[i] || 'black', // fallback until color is computed
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              textAlign: 'left',
              padding: '20px 20px 20px 100px',
            }}
          >
            <div style={{width: "40%", maxWidth: "1200px"}}>
            <h2 style={{margin: 0}}>{slide.title}</h2>
            <p style={{margin: "8px 0 16px 0"}}>{slide.desc}</p>
            <Button variant="solid" color="success" size="lg" className='order-btn'>Order Now</Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DynamicSwiper;

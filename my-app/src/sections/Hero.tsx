'use client'

import React, { useEffect } from 'react';
import { heroSlides } from '@/data/data';
import './hero.css'; // Ensure the correct path for hero.css

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeroSlide from '@/components/HeroSlide';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id='hero-slider' className='hero-slider'>
      <div className='container-md' data-aos='fade-in'>
        <div className='row'>
          <div className='col-12'>
            <Swiper
              slidesPerView={'auto'}
              speed={500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true, // Enable clickable pagination
              }}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              className='slideFeaturedPosts'
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <HeroSlide slide={slide} />
                </SwiperSlide>
              ))}

              {/* Custom Navigation Buttons */}
              <div className='custom-swiper-button-next'>
                <span className='bi-chevron-right'></span>
              </div>
              <div className='custom-swiper-button-prev'>
                <span className='bi-chevron-left'></span>
              </div>

              {/* Swiper Pagination */}
              <div className='swiper-pagination'></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

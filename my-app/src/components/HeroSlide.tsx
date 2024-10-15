import React from 'react';

export default function HeroSlide({
  slide
}: {
  slide: {
    bgImg: string;
    title: string;
    brief: string;
  };
}) {
  return (
    <a href='#' className='img-bg d-flex align-items-end'
      style={{ backgroundImage: `url(${slide.bgImg})` }} // Corrected typo in backgroundImage
    >
      <div className='img-bg-inner'>
        <h2>{slide.title}</h2>
        <p>{slide.brief}</p>
      </div>
    </a>
  );
}

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://qph.cf2.quoracdn.net/main-qimg-81b11762850642bb67a6ce2ad74da76b',
    },
    {
      url: 'https://cdna.artstation.com/p/assets/images/images/035/193/686/original/sunny-ram-msi-suprim-2.gif?1614334560',
    },
    {
      url: 'https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-instagram-post-facebook-web-banner-template_70055-1492.jpg',
    },
    {
      url: 'https://www.photofunky.net/output/image/d/c/f/0/dcf086/photofunky.gif',
    },

    {
      url: 'https://cdn.wccftech.com/wp-content/uploads/2021/05/ASUS-ROG-STRIX-G15-Laptop-with-AMD-Ryzen-9-5900HX-CPU-Radeon-RX-6800M-GPU.jpg',
    },
    {
      url: 'https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-instagram-post-facebook-web-banner-template_70055-1440.jpg',
    },
    {
      url: 'https://cdn.botb.com/media/kk2emwjh/ps5-hero-banner.jpg',
    },
    {
      url: 'https://img.freepik.com/premium-psd/modern-simple-web-banner-template-sweatshirt_202595-65.jpg',
    },
    {
      url: 'https://media.tenor.com/hnxmg7ul1cEAAAAd/apple-apple-iphone.gif',
    },
    {
      url: 'https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/776d6e5ef9fa27ce0ca712c83c6df4c6/width(1200).gif',
    },
    {
      url: 'https://media.tenor.com/TG_v2APkAysAAAAd/pcgamer.gif',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
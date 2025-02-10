import React, { useState, useEffect } from 'react'
import './mystyles.css'

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const slideNumber = document.getElementById("slide-number");
    const slidesContainer = document.querySelector(".slides");

    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    slideNumber.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}`;
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className='mobiledom'>
      <div className="slider">
        <div className="slides">
          <div className="slide">

            <img src="https://assets.tatacliq.com/medias/sys_master/images/63344119709726.jpg" alt="Pickle Perfection" />
          </div>

          <div className="slide">

            <img src="https://assets.tatacliq.com/medias/sys_master/images/63344120201246.jpg" alt="Plants and Pots" />
          </div>
          <div className="slide">

            <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281853470.jpg" alt="Plants and Pots" />
          </div>

          <div className="slide">

            <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281525790.jpg" alt="Plants and Pots" />
          </div>



        </div>
        <div className="controls">
          <button id="prev" onClick={handlePrev}>←</button>
          <span id="slide-number">01 / 03</span>
          <button id="next" onClick={handleNext}>→</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSlider

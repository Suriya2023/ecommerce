// "use client";
import React, { useState, useEffect } from 'react'
import { Carousel } from "flowbite-react";

import './sl.css'
function Sl(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateSlider = () => {
        const slider = document.querySelector('.sliderr');
        if (slider) {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    };

    const prevSlide = () => {
        const slides = document.querySelectorAll('.slidee');
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        const slides = document.querySelectorAll('.slidee');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        updateSlider();
    }, [currentIndex]);

    return (
        <div className={`bg-${props.mode}`}>






          


            

  
  



            {/* mobile view */}


            {/* ... existing code ... */}
            <div className="slider-containerr">
                <div className="sliderr">
                    <div className="slidee" id='side'>
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/63105235877918.png" alt="..." />

                    </div>
                    <div className="slidee" id='side1'>
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/63111933984798.png" alt="..." />

                    </div>
                    <div className="slidee" id='side2'>
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/63111934115870.png" alt="..." />

                    </div>
                    {/* <div className="slidee" id='side3'>
                    <img src="https://assets.tatacliq.com/medias/sys_master/images/63113128378398.jpg" alt="..." />
                    </div> */}
                </div>
                <button className="prevv" onClick={prevSlide}>&#10094;</button>
                <button className="nextt" onClick={nextSlide}>&#10095;</button>
            </div>


        </div>
    )
}

export default Sl

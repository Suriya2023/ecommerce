import React, { useState, useEffect } from 'react';
import './SSlider.css';

function sSlideBar() {
    const [slideIndex, setSlideIndex] = useState(0);

    const moveSlide = (direction) => {
        const totalSlides = 9; // Since we have 3 slides
        setSlideIndex((prevIndex) => {
            const newIndex = (prevIndex + direction + totalSlides) % totalSlides;
            return newIndex;
        });
    };

    useEffect(() => {
        // Auto-slide every 5 seconds
        const interval = setInterval(() => {
            moveSlide(1);
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <div className="carousel">
                <button
                    className="carousel-btn left-btn"
                    onClick={() => moveSlide(-1)}
                >‹</button>
                <div
                    className="carousel-content"
                    style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                >
                    <div>

                        <div className="image-content">
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281525790.jpg" alt="Fashionable Outfits" />
                        </div>
                    </div>
                    <div>

                        <div className="image-content">
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281525790.jpg" alt="Stylish Outfits" />
                        </div>
                    </div>
                    <div>


                        <div className="image-content">
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/63053281853470.jpg" alt="Winter Fashion" />
                        </div>


                    </div>

                </div>
                <button
                    className="carousel-btn right-btn"
                    onClick={() => moveSlide(+1)}
                >›</button>
            </div>
        </div>
    );
}

export default sSlideBar;   
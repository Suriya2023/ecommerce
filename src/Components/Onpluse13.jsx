import React, { useState } from 'react';
import './Onpluse13.css'
function Onpluse13() {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            image: 'https://image01-in.oneplus.net/media/202501/07/8e12e4ba80ce0c81274e5957ca960062.png?x-amz-process=image/format,webp/quality,Q_80',
            alt: 'OnePlus 13 Case',
            title: 'OnePlus 13 accessories: All you need to know about the new magnetic cases and more',
            description: "You can now use your iPhone's magnetic accessories with the OnePlus 13 too. Here's how.",
            link: '#',
        },
        {
            image: 'https://image01-in.oneplus.net/media/202501/07/ceba7d0622fcf4e3b5515cc4b04cfda1.png?x-amz-process=image/format,webp/quality,Q_80',
            alt: 'Another Accessory',
            title: 'Explore the versatility of OnePlus accessories',
            description: 'Learn how OnePlus 13 accessories enhance your smartphone experience.',
            link: '#',
        },

        {
            image: 'https://image01-in.oneplus.net/media/202408/01/f96b7365fca4254388df8a322efb8866.png?x-amz-process=image/format,webp/quality,Q_80',
            alt: 'Another Accessory',
            title: 'Explore the versatility of OnePlus accessories',
            description: 'Learn how OnePlus 13 accessories enhance your smartphone experience.',
            link: '#',
        },


        {
            image: 'https://image01-in.oneplus.net/media/202407/09/64d7f106899b3244dec3d4da7c443ba8.png?x-amz-process=image/format,webp/quality,Q_80 ',
            alt: 'Another Accessory',
            title: 'Explore the versatility of OnePlus accessories',
            description: 'Learn how OnePlus 13 accessories enhance your smartphone experience.',
            link: '#',
        },
    ];

    const showSlide = (position) => {
        if (position < 0) {
            setIndex(slides.length - 1);
        } else if (position >= slides.length) {
            setIndex(0);
        } else {
            setIndex(position);
        }
    };
    return (
        <div>
            <div className="sliderone">
                <div
                    className="slidesone"
                    style={{ transform: `translateX(-${index * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
                >
                    {slides.map((slide, i) => (
                        <div className="slideone" key={i}>
                            <div className="image-section-one">
                                <img src={slide.image} alt={slide.alt} />
                            </div>
                            <div className="text-section-one">
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                                <a href={slide.link}>Read Now</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="navigation-one">
                    <button className="prev" onClick={() => showSlide(index - 1)}>
                        &#10094;
                    </button>
                    <button className="next" onClick={() => showSlide(index + 1)}>
                        &#10095;
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Onpluse13

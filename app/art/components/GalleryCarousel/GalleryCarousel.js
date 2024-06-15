'use client'

import React, { useState } from 'react';
import './GalleryCarousel.css';

const GalleryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: "", alt: '' }
    ]

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="carousel">
            <div className="slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <button className="prev-btn" onClick={goToPrevSlide}>Previous</button>
            <button className="next-btn" onClick={goToNextSlide}>Next</button>
        </div>
    );
};

export default GalleryCarousel;

'use client'

import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './InfiniteCarousel.css';

const InfiniteCarousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const flkty = new Flickity(carouselRef.current, {
            freeScroll: true,
            wrapAround: true,
        });

        const resizeListener = () => flkty.resize();
        window.addEventListener('resize', resizeListener);

        return () => {
            flkty.destroy();
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="carousel-cell">Slide 1</div>
            <div className="carousel-cell">Slide 2</div>
            <div className="carousel-cell">Slide 3</div>
            <div className="carousel-cell">Slide 4</div>
            <div className="carousel-cell">Slide 5</div>
        </div>
    );
};

export default InfiniteCarousel;

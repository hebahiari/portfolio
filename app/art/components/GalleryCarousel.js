'use client'
import React, { useState } from 'react';
import './GalleryCarousel.css';


const GalleryCarousel = () => {
    const [currentWall, setCurrentWall] = useState(0);
    const walls = [
        { id: 0, content: 'Wall 1 Content' },
        { id: 1, content: 'Wall 2 Content' },
        { id: 2, content: 'Wall 3 Content' },
        { id: 3, content: 'Wall 4 Content' },
    ];

    const handleNext = () => {
        setCurrentWall((prev) => (prev + 1) % walls.length);
    };

    const handlePrev = () => {
        setCurrentWall((prev) => (prev - 1 + walls.length) % walls.length);
    };

    return (
        <div className="gallery-container">
            <button className="nav-button left" onClick={handlePrev}>◀</button>
            <div className="gallery-carousel">
                {walls.map((wall) => (
                    <div key={wall.id} className="wall">
                        {wall.content}
                    </div>
                ))}
            </div>
            <button className="nav-button right" onClick={handleNext}>▶</button>
        </div>
    );
};

export default GalleryCarousel;

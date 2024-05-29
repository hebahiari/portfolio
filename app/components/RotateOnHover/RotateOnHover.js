'use client'

import './RotateOnHover.css'
import React, { useEffect } from 'react';

const RotateOnHover = ({ children }) => {

    useEffect(() => {

        const tiltBox = document.querySelector('.tilt-box');

        tiltBox.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = tiltBox;
            const { offsetX: x, offsetY: y } = e;
            const moveX = ((x / width) - 0.5) * 30; // 30 is the max tilt angle
            const moveY = ((y / height) - 0.5) * 30;

            tiltBox.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
        });

        tiltBox.addEventListener('mouseleave', () => {
            tiltBox.style.transform = 'rotateX(0) rotateY(0)';
        });

    }, [])


    return (
        <div class="tilt-container">
            <div class="tilt-box">
                {children}
            </div>
        </div>
    )
}

export default RotateOnHover
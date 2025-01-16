'use client'
import './RotateOnHover.css';
import React, { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const RotateOnHover = ({ children }) => {
    useEffect(() => {
        const tiltBox = document.querySelector('.tilt-box');
        let moveX = 0;
        let moveY = 0;
        const maxRotation = 10;

        const updateRotation = () => {
            moveX = (moveX + 0.1) % (maxRotation * 2);
            moveY = (moveY + 0.1) % (maxRotation * 2);

            const angleX = moveX > maxRotation ? maxRotation * 2 - moveX : moveX;
            const angleY = moveY > maxRotation ? maxRotation * 2 - moveY : moveY;

            tiltBox.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
        };

        const rotationInterval = setInterval(updateRotation, 35);

        tiltBox.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = tiltBox;
            const { offsetX: x, offsetY: y } = e;
            moveX = ((x / width) - 0.5) * maxRotation * 2;
            moveY = ((y / height) - 0.5) * maxRotation * 2;
        });

        tiltBox.addEventListener('mouseleave', () => {
            moveX = 0;
            moveY = 0;
        });

        return () => {
            clearInterval(rotationInterval);
        };
    }, []);

    return (
        <div className="tilt-container">
            <div className="tilt-box">
                {children}
            </div>
            <div className='scroll'><IoIosArrowDown/></div>
        </div>
    );
};

export default RotateOnHover;

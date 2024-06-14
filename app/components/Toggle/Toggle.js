'use client'

import React, { useState } from 'react';
import './toggle.css'
import { useRouter } from 'next/navigation';


const ToggleSwitch = ({ type }) => {
    const [isOn, setIsOn] = useState(type !== 'engineer');
    const router = useRouter();

    const handleToggle = () => {
        setIsOn(!isOn);
        if (type === 'engineer') {
            setTimeout(() => {
                router.push('/art');
            }, 300);
        } else {
            router.push('/');
        }
    };

    if (type == 'engineer') {
        return (
            <div className='toggleSwitch' style={{ display: 'flex', gap: '10px' }}>
                <p>Engineer</p>
                <label className="switch">
                    <input type="checkbox" checked={isOn} onChange={handleToggle} />
                    <span className="slider round"></span>
                </label>
                <p>Artist</p>
            </div>
        );
    } else {
        return (
            <div className='toggleSwitch' style={{ display: 'flex', gap: '10px' }}>
                <p>Engineer</p>
                <label className="switch">
                    <input type="checkbox" checked={isOn} onChange={handleToggle} />
                    <span className="slider round"></span>
                </label>
                <p>Artist</p>
            </div>
        );
    }
};

export default ToggleSwitch;

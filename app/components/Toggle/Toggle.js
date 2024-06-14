'use client'

import React, { useState } from 'react';
import './toggle.css'

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

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
};

export default ToggleSwitch;

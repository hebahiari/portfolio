'use client'

import { useEffect, useState } from "react";
import './LoadingScreen.css';
import { Typewriter } from "react-simple-typewriter";

function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className={`loading-screen ${loading ? "loading" : "loaded"}`}>
            <div className="loading-content">
                <div className='tab'>
                    <div style={{display: 'flex', alignItems:'center'}}>
                        <span className='darkblue' style={{marginRight: '5px'}}>&#60;div</span>
                        <span className='lightblue'>    className</span>
                        <span className='white'>=</span>
                        <span className='orange'>'loading'</span>
                        <span className='darkblue'>&#62;</span>
                        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                        <span className='darkblue'>&#60;/div&#62;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;

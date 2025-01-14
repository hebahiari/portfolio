'use client'

import { useEffect, useState } from "react";
import './LoadingScreen.css';
import { Typewriter } from "react-simple-typewriter";

function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className={`loading-screen ${loading ? "loading" : "loaded"}`}>
            <div className="loading-content">
                <div className='tab' style={{marginLeft: 0}}>
                    <div style={{display: 'flex', alignItems:'center', flexWrap: 'wrap'}}>
                        <span className='darkblue'>&#60;div</span>
                        <span className='lightblue'>&nbsp;className</span>
                        <span className='white'>=</span>
                        <span className='orange'>'loading'</span>
                        <span className='darkblue'>&#62;</span>
                        <div className="main-lds-ring"><div></div><div></div><div></div><div></div></div>
                        <span className='darkblue'>&#60;/div&#62;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;

'use client'

import React from 'react'
import './ArtPage.css'
import Navbar from './components/Navbar/Navbar'
import InfiniteCarousel from './components/InfiniteCarousel/InfiniteCarousel'

const ArtPage = () => {
    return (
        <div className='artContainer'>
            <Navbar />
            <InfiniteCarousel />
        </div>
    )
}

export default ArtPage
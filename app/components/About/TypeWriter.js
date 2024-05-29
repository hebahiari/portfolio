'use client'
import { Typewriter } from 'react-simple-typewriter'

import React from 'react'

const TypeWriter = () => {
    return (
        <Typewriter words={[
            "Software Engineer 👩‍💻",
            "Designer 🎨",
            "Bug Destroyer 🪲❌",
            "Web Developer 👩‍🎤",
            "Div Centerer 🔷",
            "API Request Police 🚓",
        ]}
            loop={true}
        />
    )
}

export default TypeWriter

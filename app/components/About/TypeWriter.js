'use client'
import { Typewriter } from 'react-simple-typewriter'

import React from 'react'

const TypeWriter = () => {
    return (
        <Typewriter words={[
            "Full Stack Engineer 👩‍💻",
            "Designer 👩‍🎨",
            "Bug Destroyer 🪲❌",
            "Web Developer 👩‍🎤"
        ]}
            loop={true}
        />
    )
}

export default TypeWriter

'use client'

import './Projects.css'
import { FiGithub } from "react-icons/fi";
import { IoMdLink } from "react-icons/io";
import Image from 'next/image';
import { useState } from 'react';
import ProjectsMenu from './ProjectsMenu';
import { useEffect } from 'react';

const projects = [
    {
        name: "Petsgram",
        type: "(Social media website)",

        desc: [
            "Sign in/Sign up",
            "Add Posts/Comments/Likes",
            "Delete posts/comments",
            "Follow/Unfollow other users",
            "Search Users",
            "Notifications",
            "Explore Page/Following Page",
        ],
        tags: ["JavaScript", "React", "Express", "Node.js", "Postgres"],
        image: "/img/portfolio/7.PNG",
        gif: "/img/portfolio/gifs/petsgram.mp4",
        links: [
            "https://github.com/hebahiari/petsgram",
            "https://petsgram.hebahiari.com/",
        ],
    },

    {
        name: "IssueTracker",
        type: "(Issue Tracker website)",
        desc: [
            "Add, Update and Delete issues",
            "Assign issues to different users",
            'Login/Logout using Google Auth',
            'Filter/Sort issues by name, date and status',
            "Add comments to issues",
            "Dashboard displaying a summary of existing Issues"
        ],
        tags: ["Next.js", "TypeScript", "Prisma", "Radix UI"],
        image: "/img/portfolio/10.png",
        gif: "/img/portfolio/gifs/issuetracker.mp4",
        links: [
            "https://github.com/hebahiari/issue-tracker",
            "https://issuetracker.hebahiari.com/",
        ],
    },

    {
        name: "SmartNotes",
        type: "(Note App with AI Integration)",
        desc: [
            "Add, Update and Delete Notes",
            "ChatBot that can analyze questions and find related notes",
            "Login/Logout using Clerk",
        ],
        tags: ["Next.js", "TypeScript", "OpenAI", "Pinecone", "Clerk"],
        image: "/img/portfolio/11.png",
        gif: "/img/portfolio/gifs/smartnotes.mp4",
        links: [
            "https://github.com/hebahiari/ai-notes",
            "https://smartnotes.hebahiari.com/",
        ],
    },

    {
        name: "TechWearCo",
        type: "(E-commerce website)",
        desc: [
            "Explore items by category",
            "Add items to cart",
            "Remove items from cart",
            "Checkout",
            "Filter items by price or category",
            "Sort items by price (lowest to highest, highest to lowest)",
        ],
        tags: ["JavaScript", "React", "Redux", "SCSS", "Strapi", "Stripe"],
        image: "/img/portfolio/5.jpg",
        gif: "/img/portfolio/gifs/techwearco.mp4",
        links: [
            "https://github.com/hebahiari/ecommerce",
            "https://techwearco.hebahiari.com/",
        ],
    },

    {
        name: "Flower Image Classifier",
        type: "(Image Classifier)",
        desc: [
            "Classifies pictures of flowers and returns type predictions",
            "Trained deep learning model for flower classification",
            "Used transfer learning with pre-trained VGG11 model",
            "Demonstrated expertise in data preprocessing and model evaluation",
            "Created efficient inference pipeline for real-world predictions",

        ],
        tags: ["Python", "PyTorch", "Matplotlib", "PIL", "React"],
        image: "/img/portfolio/9.png",
        gif: "/img/portfolio/gifs/imageclassifier.mp4",
        links: [
            "https://github.com/hebahiari/flower-classifier",
            "https://flowers.hebahiari.com/",
        ],
    },


    {
        name: "TechTopic",
        type: "(Blog/Social Website)",
        desc: [
            "Sign in/Sign up with Google",
            "Sign in/Sign up with Credentials",
            "Add Posts",
            "Delete Posts",
            "Explore Page to view all posts",
            "Contact us to send a message",
            "Dark/Light mode",
        ],
        tags: ["JavaScript", "Next.js", "React", "MongoDB"],
        image: "/img/portfolio/TechTopic.png",
        gif: "/img/portfolio/gifs/techtopic.mp4",
        links: [
            "https://github.com/hebahiari/techtopic",
            "https://techtopic.hebahiari.com/",
        ],
    },

    {
        name: "Trivia Night",
        type: "(Quiz Game)",
        desc: [
            "Select difficulty",
            "Answer questions before time runs out",
            "Score is displayed at the end",
            "Restart",
        ],
        tags: ["TypeScript", "React", "MUI"],
        image: "/img/portfolio/8.PNG",
        gif: "/img/portfolio/gifs/trivia.mp4",
        links: [
            "https://github.com/hebahiari/quiz-app",
            "https://trivia.hebahiari.com/",
        ],
    },

    {
        name: "Booked.",
        type: "(Scheduling website)",
        desc: [
            "View all reservation for a specified date",
            "Create new reservations",
            "Cancel/edit/update existing reservations",
            "Search for a reservation by phone number",
            "Seat a reservation at a table",
            "Create New Tables/ Clear existing tables",
            "View all tables and whether they are occupied or open",
            "Includes built in validation to make sure reservations are at valid times",
        ],
        tags: ["JavaScript", "React", "Node.js", "Express", "Knex"],
        image: "/img/portfolio/1.jpg",
        gif: "/img/portfolio/gifs/petsgram.mp4",
        links: [
            "https://github.com/hebahiari/restaurant-reservation",
            "https://booked.hebahiari.com/",
        ],
    },
];

const Projects = () => {
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);


    const prevProject = () => {
        if (index == 0) {
            setIndex(projects.length - 1);
        } else {
            setLoading(true);
            setIndex((current) => current - 1);
        }
    }

    const nextProject = () => {
        if (index == projects.length - 1) {
            setIndex(0);
        } else {
            setLoading(true);
            setIndex((current) => current + 1);
        }
    }

    const handleImageLoad = () => {
        setLoading(false);
    }

    return (
        <div className='projects' id='projects'>
            <ProjectsMenu projects={projects} setIndex={(newIndex) => { setLoading(true); setIndex(newIndex); }} />
            <div className='projectsNav'>
                <button className='projectsIndex projectIndexArrow' onClick={prevProject}>
                    &#60;
                </button>
                <div className='projectsIndex'>
                    {index + 1} / {projects.length}
                </div>
                <button className='projectsIndex projectIndexArrow' onClick={nextProject}>
                    &#62;
                </button>
            </div>
            <div className='projectsContainer'>
                <div className='projectDisplay'>
                    {loading && (
                        <div className='projectVideo'>
                            <video
                                className='scaled'
                                width="100"
                                height="100"
                                autoPlay
                                loop
                                muted
                                key={'loading'}  // Adding a key for the loading state
                                onCanPlayThrough={handleImageLoad}
                            >
                                <source src={'/img/portfolio/gifs/loading.mp4'} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                    <div className='projectVideo' style={{ display: loading ? 'none' : 'block' }}>
                        <video
                            className='scaled'
                            width="100%"
                            height="100%"
                            autoPlay
                            loop
                            muted
                            key={projects[index].gif}
                            onCanPlayThrough={handleImageLoad}
                        >
                            <source src={projects[index].gif} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='projectImage'>
                        <a href={projects[index].links[1]} target='_blank'>
                            <Image layout='responsive' width={100} height={100} src='/img/laptop.png' />
                        </a>
                    </div>
                </div>
                <div className='projectDetails'>
                    <div className='projectDesc'>
                        <h3 className='projectTitle yellow'>
                            <a href={projects[index].links[1]} target='_blank'>
                                {projects[index].name}
                                <span className='green' style={{ fontSize: 'large' }}> {projects[index].type}</span>
                            </a>
                        </h3>
                        <div className='projectInfo'>
                            {projects[index].desc.join(" - ")}
                        </div>
                        <div className='projectTags'>
                            {projects[index].tags.map((tag, index) => <div key={index} className='projectTag'>{tag}</div>)}
                        </div>
                        <div className='projectLinks'>
                            <a href={projects[index].links[1]} className='projectLink' target='_blank'>
                                Click to try
                            </a>
                            <a href={projects[index].links[0]} className='projectLinkIcon' target='_blank'>
                                <FiGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Projects

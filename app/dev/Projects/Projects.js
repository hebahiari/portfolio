'use client'

import './Projects.css'
import { FiGithub } from "react-icons/fi";
import { IoMdLink } from "react-icons/io";
import Image from 'next/image';
import { useState } from 'react';
import ProjectsMenu from './ProjectsMenu';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Star } from 'react-konva';

const projects = [

    {
        name: "Heterodox Labs",
        type: "(Research Platform)",

        desc: [
            "",
        ],
        tags: ["Nextjs", "TypeScript", "MUI"],
        frontend: [],
        backend: [],
        image: "/img/portfolio/7.PNG",
        gif: "/img/portfolio/gifs/hdx.mov",
    },

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
        frontend: ["JavaScript", "React"],
        backend: ["Express", "Node.js", "Postgres"],
        image: "/img/portfolio/7.PNG",
        gif: "/img/portfolio/gifs/petsgram.mp4",
        links: [
            "https://github.com/hebahiari/petsgram",
            "https://petsgram.hebahiari.com/",
        ],
    },

    {
        name: "Screen Indie",
        type: "(Streaming Platform)",
        desc: [
            "",
        ],
        tags: ["Next.js", "TypeScript", "OpenAI", "Pinecone", "Clerk"],
        frontend: [],
        backend: [],
        image: "/img/portfolio/11.png",
        gif: "/img/portfolio/gifs/screenindie.mov",
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
        frontend: ["JavaScript", "React", "Redux", "SCSS"],
        backend: ["Strapi", "Stripe"],
        image: "/img/portfolio/5.jpg",
        gif: "/img/portfolio/gifs/techwearco.mp4",
        links: [
            "https://github.com/hebahiari/ecommerce",
            "https://techwearco.hebahiari.com/",
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
        frontend: ["Next.js", "TypeScript"],
        backend: ["OpenAI", "Pinecone", "Clerk"],
        image: "/img/portfolio/11.png",
        gif: "/img/portfolio/gifs/smartnotes.mp4",
        links: [
            "https://github.com/hebahiari/ai-notes",
            "https://smartnotes.hebahiari.com/",
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
        frontend: ["Next.js", "TypeScript"],
        backend: ['Prisma'],
        image: "/img/portfolio/10.png",
        gif: "/img/portfolio/gifs/issuetracker.mp4",
        links: [
            "https://github.com/hebahiari/issue-tracker",
            "https://issuetracker.hebahiari.com/",
        ],
    },

    {
        name: "Flower Image Classifier",
        type: "(Image Classifier)",
        desc: [
            "Trained deep learning model for flower classification",
            "Classifies pictures of flowers and returns type predictions",
            "Used transfer learning with pre-trained VGG11 model",
            "Demonstrated expertise in data preprocessing and model evaluation",
            "Created efficient inference pipeline for real-world predictions",

        ],
        tags: ["Python", "PyTorch", "Matplotlib", "PIL", "React"],
        frontend: ["React", "MUI"],
        backend: ["Python", "PyTorch", "Matplotlib", "PIL"],
        image: "/img/portfolio/9.png",
        gif: "/img/portfolio/gifs/imageclassifier.mp4",
        links: [
            "https://github.com/hebahiari/flower-classifier",
            "https://flowers.hebahiari.com/",
        ],
    },

    {
        name: "Payco",
        type: "(Fintech Application)",
        desc: [
            "User Profile, Authentication/Authorization",
        ],
        tags: ["React", "TypeScript", "Nodejs", "Express", "MUI"],
        frontend: [],
        backend: [],
        image: "/img/portfolio/9.png",
        gif: "/img/portfolio/gifs/payco.mov",
    },


    // {
    //     name: "TechTopic",
    //     type: "(Blog/Social Website)",
    //     desc: [
    //         "Sign in/Sign up with Google",
    //         "Sign in/Sign up with Credentials",
    //         "Add Posts",
    //         "Delete Posts",
    //         "Explore Page to view all posts",
    //         "Contact us to send a message",
    //         "Dark/Light mode",
    //     ],
    //     tags: ["JavaScript", "Next.js", "React", "MongoDB"],
    //     frontend: ["JavaScript", "Next.js", "React"],
    //     backend: ["MongoDB"],
    //     image: "/img/portfolio/TechTopic.png",
    //     gif: "/img/portfolio/gifs/techtopic.mp4",
    //     links: [
    //         "https://github.com/hebahiari/techtopic",
    //         "https://techtopic.hebahiari.com/",
    //     ],
    // },

    // {
    //     name: "Trivia Night",
    //     type: "(Quiz Game)",
    //     desc: [
    //         "Select difficulty",
    //         "Answer questions before time runs out",
    //         "Score is displayed at the end",
    //         "Restart",
    //     ],
    //     tags: ["TypeScript", "React", "MUI"],
    //     frontend: ["TypeScript", "React", "MUI"],
    //     image: "/img/portfolio/8.PNG",
    //     gif: "/img/portfolio/gifs/trivia.mp4",
    //     links: [
    //         "https://github.com/hebahiari/quiz-app",
    //         "https://trivia.hebahiari.com/",
    //     ],
    // },

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
        frontend: ["JavaScript", "React"],
        backend: ["Node.js", "Express", "Knex"],
        image: "/img/portfolio/1.jpg",
        gif: "/img/portfolio/gifs/booked.mp4",
        links: [
            "https://github.com/hebahiari/restaurant-reservation",
            "https://booked.hebahiari.com/",
        ],
    },
];

function generateShapes() {
    return [...Array(10)].map((_, i) => ({
        id: i.toString(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        isDragging: false,
        color: "#89b717",
    }));
}

const INITIAL_STATE = generateShapes();


const Projects = () => {
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [stars, setStars] = useState(INITIAL_STATE);

    const handleDragStart = (e) => {
        const id = e.target.id();
        setStars(
            stars.map((star) => {
                return {
                    ...star,
                    isDragging: star.id === id,
                };
            })
        );
    };
    const handleDragEnd = (e) => {
        setStars(
            stars.map((star) => {
                return {
                    ...star,
                    isDragging: false,
                };
            })
        );
    };

    const handleStarClick = (id) => {
        console.log('clicked!')
        setStars(stars.filter((star) => star.id !== id));

    };

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

    const starsComponent = (
        <Stage width={window.innerWidth} height={window.innerHeight} className='konva'>
            <Layer>
                {stars.map((star) => (
                    <Star
                        key={star.id}
                        id={star.id}
                        x={star.x}
                        y={star.y}
                        numPoints={5}
                        innerRadius={20}
                        outerRadius={40}
                        fill="#89b717"
                        opacity={0.8}
                        draggable
                        rotation={star.rotation}
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.6}
                        shadowOffsetX={star.isDragging ? 10 : 5}
                        shadowOffsetY={star.isDragging ? 10 : 5}
                        scaleX={star.isDragging ? 1.2 : 1}
                        scaleY={star.isDragging ? 1.2 : 1}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClick={() => handleStarClick(star.id)}
                    />
                ))}
            </Layer>
        </Stage>
    )

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
                        {projects[index].links ? 
                        <a href={projects[index].links ? projects[index].links[1] : ''} target='_blank'>
                            <Image layout='responsive' alt='laptop' width={100} height={100} src='/img/laptop.png' />
                        </a> 
                        : 
                        <Image layout='responsive' alt='laptop' width={100} height={100} src='/img/laptop.png' />}
                    </div>
                    {/* <a href={projects[index].links[1]} className='projectLinkButton' target='_blank'>
                        Visit website
                    </a> */}
                </div>
                <div className='projectDetails'>
                    <div className='projectDesc'>
                        <h3 className='projectTitle yellow'>
                            <a href={projects[index].links ? projects[index].links[1] : ''} target='_blank'>
                                {projects[index].name}
                                <span className='green' style={{ fontSize: 'large' }}> {projects[index].type}</span>
                            </a>
                        </h3>
                        <div className='projectInfo'>
                            <ul>{projects[index].desc?.map((desc, index) => (<li key={index}>{desc}</li>))}</ul>
                        </div>
                        <div className='projectTags'>
                            {projects[index].tags?.map((tag, index) => <div key={index} className='projectTag'>{tag}</div>)}
                        </div>

                        <div >
                            {/* {projects[index].frontend &&
                                <div className='projectTags' style={{ paddingBottom: '10px' }}>
                                    frontend: {projects[index].frontend?.map((tag, index) => <div key={index} className='projectTag'>{tag}</div>)}
                                </div>
                            }
                            {projects[index].backend &&
                                <div className='projectTags'>
                                    backend: {projects[index].backend?.map((tag, index) => <div key={index} className='projectTag'>{tag}</div>)}
                                </div>
                            } */}

                            {projects[index]?.links && <div className='projectLinks'>
                                <a href={projects[index].links[2]} className='projectLinkIcon' target='_blank'>
                                    <IoMdLink />
                                </a>
                                <a href={projects[index].links[0]} className='projectLinkIcon' target='_blank'>
                                    <FiGithub />
                                </a>
                            </div>}
                        </div>


                        {/* <div className='projectLinks'>
                            <a href={projects[index].links[2]} className='projectLinkIcon' target='_blank'>
                                <IoMdLink />
                            </a>
                            <a href={projects[index].links[0]} className='projectLinkIcon' target='_blank'>
                                <FiGithub />
                            </a>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )


}

export default Projects

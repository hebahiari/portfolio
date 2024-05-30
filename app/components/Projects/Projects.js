'use client'

import './Projects.css'
import { FiGithub } from "react-icons/fi";
import { IoMdLink } from "react-icons/io";
import Image from 'next/image';
import { useState } from 'react';
import ProjectsMenu from './ProjectsMenu';

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
        gif: "/img/portfolio/gifs/petsgram.gif",
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
        gif: "/img/portfolio/gifs/issuetracker.gif",
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
        gif: "/img/portfolio/gifs/smartnotes.gif",
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
        gif: "/img/portfolio/gifs/techwearco.gif",
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
        gif: "/img/portfolio/gifs/imageclassifier.gif",
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
        gif: "/img/portfolio/gifs/techtopic.gif",
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
        gif: "/img/portfolio/gifs/trivia.gif",
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
        gif: "/img/portfolio/gifs/petsgram.gif",
        links: [
            "https://github.com/hebahiari/restaurant-reservation",
            "https://booked.hebahiari.com/",
        ],
    },
];

const Projects = () => {

    const [index, setIndex] = useState(0)

    const prevProject = () => {
        if (index == 0) {
            setIndex(projects.length - 1)
        } else {
            setIndex((current) => current - 1)
        }
    }

    const nextProject = () => {
        if (index == projects.length - 1) {
            setIndex(0)
        } else {
            setIndex((current) => current + 1)
        }
    }

    return (
        <div className='projects' id='projects'>
            <ProjectsMenu projects={projects} setIndex={setIndex} />
            <div className='projectsContainer' >
                <div className='projectDisplay'>
                    <a href={projects[index].links[1]} target='_blank'>
                        <div className='projectImage'>
                            <Image className='scaled' layout='responsive' width={100} height={100} src={projects[index].gif} />
                        </div>
                        <div className='projectImage'>
                            <Image layout='responsive' width={100} height={100} src='/img/laptop.png' />
                        </div>
                    </a>
                </div>
                <div className='projectDetails'>
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

                    <div className='projectDesc'>
                        <h3 className='projectTitle yellow'>
                            <a href={projects[index].links[1]} target='_blank'>
                                {projects[index].name}
                            </a>
                        </h3>
                        <div className='projectInfo'>
                            {projects[index].desc.join(" - ")}
                        </div>
                        <div className='projectTags'>
                            {projects[index].tags.map((tag, index) => <div key={index} className='projectTag'>{tag}</div>)}
                        </div>
                        <div className='projectLinks'>
                            <a href={projects[index].links[0]} className='projectLink' target='_blank'>
                                <FiGithub />
                            </a>
                            <a href={projects[index].links[1]} className='projectLink' target='_blank'>
                                <IoMdLink />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
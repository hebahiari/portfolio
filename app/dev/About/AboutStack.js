import './About.css'

const AboutStack = () => {
    const frontendSkills = [
        'Next.js, React, TypeScript, JavaScript',
        'Responsive Design, Mobile First Development',
        'State Management, Routing',
        'Accessibility Standards (WCAG)',
        'Performance Optimization, SEO',
        'UI/UX Design',
        'RESTful APIs Integration'
    ];

    const backendSkills = [
        'Node.js, Express',
        'RESTful API Development',
        'Database Management (SQL, NoSQL)',
        'Authentication & Authorization (JWT, OAuth)',
        'Data Validation & Sanitization',
        'Security Best Practices'
    ];

    const otherSkills = [
        'Web Design & Prototyping',
        'Machine Learning',
        'Testing',
        'Version Control',
        'Agile & Scrum Methodologies',
        'Code Quality & Best Practices',
        'Collaboration & Code Reviews'
    ];

    return (
        <div className='aboutStack'>
            <h3 className='stackTitle yellow'>Full Stack Development Skills</h3>
            <div className='aboutLeft orange'>
                <div className='aboutRow'>
                    <div className='aboutTitle darkblue'>Frontend:</div>
                    <ul>
                        {frontendSkills.map((skill, index) => (
                            <li key={index} className='aboutItem'>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className='aboutLine'></div>
                <div className='aboutRow'>
                    <div className='aboutTitle darkblue'>Backend:</div>
                    <ul>
                        {backendSkills.map((skill, index) => (
                            <li key={index} className='aboutItem'>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className='aboutLine'></div>
                <div className='aboutRow'>
                    <div className='aboutTitle darkblue'>Other:</div>
                    <ul>
                        {otherSkills.map((skill, index) => (
                            <li key={index} className='aboutItem'>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='aboutStackFooter yellow'></div>
        </div>
    )
}

export default AboutStack;

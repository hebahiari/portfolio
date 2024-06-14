import { IoMenu } from 'react-icons/io5'
import './ProjectsMenu.css'
import { useState } from 'react'

const ProjectsMenu = ({ projects, setIndex }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const openMenu = () => {
        setMenuOpen((current) => !current)
    }

    const menu = (
        <div className='menuContainer cardBorder tooltip'>
            {projects.map((project, index) =>
                <button className='projectTag' key={index} onClick={() => setIndex(index)}>{project.name}</button>
            )}
        </div>
    )

    return (
        <>
            <div className='projectsTitle'>
                <h3 className='lightblue'>Selected Projects</h3>
                <button onClick={openMenu} className='menuButton'><IoMenu /></button>
            </div>
            {menuOpen && menu}
        </>
    )
}

export default ProjectsMenu
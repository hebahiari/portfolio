import { FaLaptop, FaLaptopCode } from 'react-icons/fa'
import './MiniNav.css'
import { MdDoubleArrow, MdOutlineMail } from 'react-icons/md'
import { IoPersonCircle } from 'react-icons/io5'

const MiniNav = () => {
    return (

        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <a href="#" className="nav-link">
                        <MdDoubleArrow className='nav-icon' />
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#about" className="nav-link">
                        <IoPersonCircle className='nav-icon' />
                        <span className="link-text">about</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#projects" className="nav-link">
                        <FaLaptopCode className='nav-icon' />
                        <span className="link-text">projects</span>
                    </a>
                </li>


                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                        <MdOutlineMail className='nav-icon' />
                        <span className="link-text">contact</span>
                    </a>
                </li>

            </ul>
        </nav>
    )
}

export default MiniNav
import './About.css'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import Image from 'next/image';
import AboutStack from './AboutStack';
import TypeWriter from './TypeWriter';


const About = () => {
    return (
        <div className='aboutContainer' id='about'>
            <div className='backdrop'></div>
            <div className='aboutTop'>
                <div className='aboutLinks cardBorder'>
                    <a href='https://github.com/hebahiari' target='_blank'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/hebadev/' target='_blank'><FaLinkedin /></a>
                    <a href='https://www.instagram.com/capturingflow/' target='_blank'><FaInstagram /></a>
                    <a href='https://tinyurl.com/4ujsnk3n' target='_blank'><FaRegFilePdf /></a>

                </div>
                <div className='aboutDesc cardBorder'>
                    <div className='yellow' style={{ fontSize: 'larger' }}>Hello,</div>
                    <div className='lightblue' style={{ fontSize: 'x-large' }}>I'm Heba!</div>
                    <div className='orange typewriter'>Im a <TypeWriter /></div>
                    <div>Full Stack Engineer with 3 years of experience delivering scalable web applications across diverse industries. Skilled in modern frontend and backend technologies. Adept at collaborating with teams, optimizing performance, and crafting user-focused designs that elevate the user experience.</div>

                </div>
                <div className='aboutImg cardBorder'>
                    <Image src='/img/portrait.jpeg'alt='portrait' layout='responsive' height={300}  width={300}/>
                </div>
            </div>
            <AboutStack />
        </div>
    )
}

export default About
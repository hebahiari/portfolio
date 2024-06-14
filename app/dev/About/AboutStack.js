import './About.css'
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiKnexdotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAutodesk } from "react-icons/si";
import { FaReact } from "react-icons/fa";


const AboutStack = () => {
    return (
        <div className='aboutStack'>
            <h3 className='stackTitle yellow'>Main Stack</h3>
            <div className='aboutLeft orange'>
                <div className='aboutRow'>
                    <div className='aboutTitle darkblue'>Frontend:</div>
                    <div className='aboutItem orange'><RiNextjsFill /> NextJs</div>
                    <div className='aboutItem'><FaReact /> React</div>
                    <div className='aboutItem'><SiTypescript /> TypeScript</div>
                    <div className='aboutItem'><IoLogoJavascript /> JavaScript</div>
                </div>
                <div className='aboutLine'></div>
                <div className='aboutRow'>
                    <div className='aboutTitle darkblue'>Backend:</div>
                    <div className='aboutItem'><FaNode /> Nodejs</div>
                    <div className='aboutItem'><SiExpress /> Express</div>
                    <div className='aboutItem'><SiKnexdotjs /> Knex</div>
                    <div className='aboutItem'><SiPostgresql /> PostgreSQL</div>
                </div>
                <div className='aboutLine'></div>
                <div className='aboutRow'>
                    <div className='aboutTitle darkblue'>ML:</div>
                    <div className='aboutItem'><FaPython /> Python</div>
                    <div className='aboutItem'><SiPytorch /> PyTorch</div>
                    <div className='aboutItem'><GoGraph /> matplotlib</div>
                    <div className='aboutItem'><FiBox /> PIL</div>
                </div>
                <div className='aboutLine'></div>
                <div className='aboutRow'>
                    <div className='aboutTitle darkblue'>Cloud:</div>
                    <div className='aboutItem'><FaAws /> AWS</div>
                    <div className='aboutItem'><SiMongodb /> MongoDB</div>
                    <div className='aboutItem'><GrHeroku /> Heroku</div>
                    <div className='aboutItem'><IoLogoVercel /> Vercel</div>
                </div>
                <div className='aboutLine'></div>
                <div className='aboutRow'>
                    <div className='aboutTitle darkblue'>Design:</div>
                    <div className='aboutItem'><FiFigma /> Figma</div>
                    <div className='aboutItem'><SiAdobephotoshop />Photoshop</div>
                    <div className='aboutItem'><SiAdobeindesign />Indesign</div>
                    <div className='aboutItem'><SiAutodesk /> 3Ds Max</div>
                </div>
            </div>
            <div className='aboutStackFooter yellow'>
                <div>...and more!</div>
            </div>
        </div>
    )
}

export default AboutStack
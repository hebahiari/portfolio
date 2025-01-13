
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import './Contact.css'
import dynamic from 'next/dynamic';

const KaboomGame = dynamic(() => import('./Game/Game'), { ssr: false });

const Contact = () => {
    return (
        <div className='contactContainer' id='contact'>
            <div className='contactInfo cardBorder'>
                <h2 className='yellow'>Lets get in touch!</h2>
                <div className="infoList purple">
                    <div className='infoItem'>
                        <IoMailOutline /> <p>hebahiary@gmail.com</p>
                    </div>
                    <div className='infoItem'>
                        <FaLinkedin /> <a href="https://www.linkedin.com/in/hebadev/" target="_blank"><p>linkedin.com/in/hebadev</p></a>
                    </div>
                </div>
            </div>
            <div className='gameContainer cardBorder'>
                <div className="gameLoading">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                <div className="game">
                <KaboomGame/>
                </div>
            </div>
        </div>
    )
}

export default Contact
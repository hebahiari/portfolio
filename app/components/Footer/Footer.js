import Image from 'next/image'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div>Copyrights © 2024 Heba A. - Designed & Developed by Me </div>
            <div className='footerRight'>Powered by: <span><Image src='/img/nextjs.png' height={40} width={40} /></span></div>
        </div>
    )
}

export default Footer
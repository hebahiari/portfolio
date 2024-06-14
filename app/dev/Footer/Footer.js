import Image from 'next/image'
import './Footer.css'
import ToggleSwitch from '@/app/components/Toggle/Toggle'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <div>Copyrights © 2024 Heba A. - Designed & Developed by Me </div>
                <ToggleSwitch type='engineer' />
                <div className='footerRight'>Built with: <span><Image src='/img/nextjs.png' height={40} width={40} /></span></div>
            </div>
        </div>
    )
}

export default Footer
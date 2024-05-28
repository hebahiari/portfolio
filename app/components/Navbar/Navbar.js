import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link href='/' className='title'>Heba A.</Link>
            <div className='links yellow'>
                <Link href='#projects'>projects</Link>
                <Link href='#about'>about</Link>
                <Link href='#contact'>contact</Link>
            </div>
        </div>
    )
}

export default Navbar
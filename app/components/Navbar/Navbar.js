import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link href='/' className='title'>Heba Al.</Link>
            <div className='links'>
                <Link href='#projects'>projects</Link>
                <Link href='#about'>about</Link>
                <Link href='#contact'>contact</Link>
            </div>
        </div>
    )
}

export default Navbar
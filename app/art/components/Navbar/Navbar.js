import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link href='/' className='title lightblue'>Heba A.</Link>
            <div className='links yellow'>
                <Link href='#paintings'>Paintings</Link>
                <Link href='#pottery'>Pottery</Link>
                <Link href='#photography'>Photography</Link>
            </div>
        </div>
    )
}

export default Navbar
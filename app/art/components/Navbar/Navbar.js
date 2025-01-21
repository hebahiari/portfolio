import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link href='#paintings'>Paintings</Link>
            <Link href='#pottery'>Pottery</Link>
            <Link href='#photography'>Photography</Link>
        </div>
    )
}

export default Navbar
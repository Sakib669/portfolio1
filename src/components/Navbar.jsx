import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
            name: 'home'
        },
        {
            id: 2,
            link: 'about',
            name: 'about'
        },
        {
            id: 3,
            link: 'portfolio',
            name: 'portfolio'
        },
        {
            id: 4,
            link: 'skills',
            name: 'skills'
        },
        {
            id: 4,
            link: 'contact',
            name: 'contact'
        },
    ]


    return (
        <nav className='flex justify-between items-center w-full h-20 text-white px-4 bg-black'>
            <article>
                <h1 className='text-5xl font-signature ms-2'>Sakib</h1>
            </article>
            <ul className='hidden md:flex'>
                {
                    links.map((link, i) =>
                        <li key={i} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><Link duration={500} to={link.link}>{link.name}</Link></li>
                    )
                }
            </ul>

            <div onClick={() => setShow(!show)} className='md:hidden cursor-pointer pr-4 z-10'>
                {show ? <FaTimes  size={30} /> : <FaBars  size={30}/>}
            </div>

            {show && 
                    <ul className='flex flex-col items-center justify-center absolute left-0 top-0 min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                        {links.map((link, i) => (
                            <li
                                key={i}
                                className='px-4 cursor-pointer capitalize font-medium py-6 text-4xl'
                                
                            >
                                <Link onClick={() => setShow(!show)} to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                }
        </nav>
    );
};

export default Navbar;
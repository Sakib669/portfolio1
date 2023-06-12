import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const SocialLinks = () => {

    const links = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedin size={30} />,
            href: 'https://twitter.com/',
            style: 'rounded-tr-md'
        },
        {
            name: 'Github',
            icon: <FaGithub size={30} />,
            href: 'https://github.com/',
        },
        {
            name: 'Mail',
            icon: <HiOutlineMail size={30} />,
            href: 'mailton:foo@gmail.com',
        },
        {
            name: 'Resume',
            icon: <BsFillPersonLinesFill size={30} />,
            href: '/Resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ];



    return (
        <section className="hidden flex-col top-[45%] left-0 fixed lg:flex" >
            <ul>
                {
                    links.map((link, i) =>
                        <li key={i} className="flex justify-between items-center w-44 h-14 px-4 bg-gray-600 -ms-[120px] hover:rounded-md hover:-ms-3 duration-300">
                            <Link to={link.href} className="flex justify-between items-center w-full text-white" target="_blank" download={link.download}>
                                <>
                                    {link.name} {link.icon}
                                </>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </section>
    );
};

export default SocialLinks;
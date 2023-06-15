
import { Link } from 'react-router-dom';
import img2 from '../assets/portfolio/1(2).png';
import img3 from '../assets/portfolio/1(3).png';
import img4 from '../assets/portfolio/1(4).png';
import img5 from '../assets/portfolio/1(5).png';
import img6 from '../assets/portfolio/1(6).png';
import img7 from '../assets/portfolio/1(7).png';

const Portfolio = () => {

    const projects = [,
        {
            img: img2,
            demo: 'https://toy-bazar-62ef2.web.app/',
            code: 'https://github.com/Sakib669/toy-bazar-client'
        },
        {
            img: img3,
            demo: 'https://bistro-boss-client-ba920.web.app/',
            code: 'https://github.com/Sakib669/bistro-boss-client'
        },
        {
            img: img4,
            demo: 'https://cards-doctor-24a5d.web.app/',
            code: 'https://github.com/Sakib669/car-doctor-client'
        },
        {
            img: img5,
            demo: 'https://summer-camp-client-ef842.web.app/',
            code: 'https://github.com/Sakib669/summer-camp-client'
        },
        {
            img: img6,
            demo: 'https://the-news-dragon-109a9.web.app/category/0',
            code: 'https://github.com/Sakib669/the-news-dragon-client'
        },
        {
            img: img7,
            demo: 'https://fabulous-rabanadas-a588b1.netlify.app/',
            code: 'hhttps://github.com/Sakib669/quiz-hero'
        },
    ];

    return (
        <section name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen'>
            <article className='max-w-screen-lg p-4 mx-auto flex-cold justify-center w-full h-full pb-28'>
                <div className='pb-8'>
                    <p className='text-4xl inline border-b-4 border-gray-500 font-bold'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 sm:px-0 '>
                    {
                        projects.map((project, index) =>
                            <article key={index} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={project.img} alt="" className='rounded-md duration-200 hover:scale-105 h-[250px] object-cover w-full' />
                                <div className='flex items-center justify-center'>
                                    <button className="w-1/2 px-6  py-3 m-4 duration-200 hover:scale-105"><Link to={project.demo} target="_blank">Demo</Link></button>
                                    <button className="w-1/2 px-6  py-3 m-4 duration-200 hover:scale-105"><Link to={project.code} target="_blank">Code</Link></button>
                                </div>
                            </article>
                        )
                    }
                </div>


            </article>
        </section>
    );
};

export default Portfolio;
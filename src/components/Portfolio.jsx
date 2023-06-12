import { Link } from 'react-router-dom';
import img1 from '../assets/portfolio/img(1).jpg';
import img2 from '../assets/portfolio/img(2).jpg';
import img3 from '../assets/portfolio/img(3).jpg';
import img4 from '../assets/portfolio/img(4).jpg';
import img5 from '../assets/portfolio/img(5).jpg';
import img6 from '../assets/portfolio/img(6).jpg';
import img7 from '../assets/portfolio/img(7).jpg';
import img8 from '../assets/portfolio/img(8).jpg';

const Portfolio = () => {

    const projects = [
        {
            img: img1,
            demo: '',
            code: ''
        },
        {
            img: img2,
            demo: '',
            code: ''
        },
        {
            img: img3,
            demo: '',
            code: ''
        },
        {
            img: img4,
            demo: '',
            code: ''
        },
        {
            img: img5,
            demo: '',
            code: ''
        },
        {
            img: img6,
            demo: '',
            code: ''
        },
        {
            img: img7,
            demo: '',
            code: ''
        },
        {
            img: img8,
            demo: '',
            code: ''
        },
    ];

    return (
        <section name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen'>
            <article className='max-w-screen-lg p-4 mx-auto flex-cold justify-center w-full h-full pb-28'>
                <div className='pb-8'>
                    <p className='text-4xl inline border-b-4 border-gray-500 font-bold'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        projects.map((project, index) =>
                            <article key={index} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={project.img} alt="" className='rounded-md duration-200 hover:scale-105' />
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
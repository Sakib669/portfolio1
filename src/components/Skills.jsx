import css from '../assets/experience/css.png';
import github from '../assets/experience/github.png';
import html from '../assets/experience/html.png';
import javascript from '../assets/experience/javascript.png';
import expressjs from '../assets/experience/expressjs.png';
import node from '../assets/experience/node.png';
import react from '../assets/experience/react.png';
import tailwind from '../assets/experience/tailwind.png';
import mogodb from '../assets/experience/mogodb.png';


const Skills = () => {

    const skils = [
        {
            img: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            img: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            img: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            img: github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },
        {
            img: javascript,
            title: 'JS (ES6)',
            style: 'shadow-yellow-500'
        },
        {
            img: react,
            title: 'REACT JS',
            style: 'shadow-blue-600'
        },
        {
            img: expressjs,
            title: 'EXPRESS JS',
            style: 'shadow-white'
        },
        {
            img: node,
            title: 'NODE JS',
            style: 'shadow-green-600'
        },
        {
            img: mogodb,
            title: 'MONGO DB',
            style: 'shadow-lime-400'
        },
    ]

    return (
        <section name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white">
            <article className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div className="">
                    <h3 className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Skills</h3>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>


                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        skils.map(({ img, title, style }, index) =>
                            <div key={index} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={img} className="w-20 mx-auto " />
                                <p className='mt-4'>{title}</p>
                            </div>
                        )
                    }
                </div>


            </article>

        </section>
    );
};

export default Skills;
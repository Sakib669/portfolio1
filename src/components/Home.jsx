import { Link } from 'react-scroll';
import heroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
    return (
        <section name="home" className="min-h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800 pb-20 md:pb-0">


            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row'>
                <article className='flex flex-col justify-center h-full w-3/4 mx-auto mb-5'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm Full Stack Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, id eos veritatis incidunt aperiam omnis, cupiditate deleniti possimus quas consequatur nostrum excepturi ut impedit ipsa porro vero dolores officiis!</p>


                    <div>
                        <Link to='portfolio' className='group flex px-6 text-white w-fit py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Porfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className="ms-1" />
                            </span>
                        </Link>
                    </div>
                </article>
                <article>
                    <img src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=' alt="my profile" className='rounded-2xl mx-auto w-3/4 md:w-full' />
                </article>
            </div>
        </section>
    );
};

export default Home;
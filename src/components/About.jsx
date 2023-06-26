import React from 'react';

const About = () => {
    return (
        <section name="about" className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white">


            <article className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <h5 className="text-4xl font-bold inline border-b-4 border-gray-500">About</h5>
                </div>
                <p className="text-xl mt-20">
                    My name is Shafiqul Islam Sakib, and I am a  web developer (MERN Stack). I have acquired a diverse skill set, including proficiency in React.js, HTML, CSS, Bootstrap, Tailwind, JavaScript, Express.js, Node.js, and MongoDB. I am also knowledgeable about authentication using Google Firebase and proficient in utilizing various development tools.
                </p>


                <br />


                <p className="text-xl">As a web developer, I possess a strong passion for learning and continuously improving my skills. I am a quick learner, always eager to explore new technologies and stay up-to-date with industry trends. I enjoy working on frontend development, creating engaging user interfaces, and implementing responsive designs. Moreover, I am familiar with backend development using Express.js and Node.js, enabling me to build efficient and scalable web applications.</p>
                <br />


                <p className="text-xl">I am a detail-oriented individual with a problem-solving mindset, capable of translating client requirements into practical and visually appealing solutions. I am enthusiastic about collaborating with teams, taking on challenges, and contributing to the development of innovative web projects.</p>
            </article>
        </section>
    );
};

export default About;
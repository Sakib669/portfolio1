import React from 'react';

const About = () => {
    return (
        <section name="about" className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white">


            <article className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <h5 className="text-4xl font-bold inline border-b-4 border-gray-500">About</h5>
                </div>
                <p className="text-xl mt-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro libero suscipit, laborum, autem id deserunt aliquam voluptas eos excepturi sapiente quam dolorem ex fugit ab quos similique maxime possimus non. Minus non officia animi ullam minima? Veritatis suscipit natus ullam, nulla atque at quos quasi ipsa distinctio iste placeat.
                </p>


                <br />


                <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse perspiciatis corrupti doloremque reiciendis nisi expedita modi mollitia molestiae illum. Iusto, minus a obcaecati tenetur quia debitis deserunt veritatis, maxime impedit sapiente nihil illum laboriosam nulla et tempore voluptatem, dolores iure eveniet quaerat natus ducimus possimus ex! Iure, rem dolores.</p>
            </article>
        </section>
    );
};

export default About;
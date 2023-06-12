import React from 'react';

const Contact = () => {
    return (
        <section name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <article className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</h3>
                    <p className="py-6">Submit the fomr below to get in touch with me</p>
                </article>

                <article className="flex justify-center items-center">
                    <form className="flex flex-col w-full md:w-1/2 space-y-4" action="https://getform.io/f/194ce589-babc-4d30-bf00-8319774fbb16" method="POST">
                        <input  type="text"
                        placeholder="Enter your name"
                        name="name" 
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />


                        <input  type="email"
                        placeholder="Enter your email"
                        name="email" 
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

                        <textarea name="message" rows="10" className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none" placeholder="Enter your message"></textarea>

                        <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" >Let's Talk</button>
                    </form>
                </article>

            </div>
        </section>
    );
};

export default Contact;
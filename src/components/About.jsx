import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-full md:h-screen bg-gradient-to-b from-gray-900 to-black text-white py-2 md:py-0'>

            <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='flex justify-center md:justify-start items-center pb-8 pt-0'>
                    <p className='text-2xl sm:text-3xl lg:text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-base md:text-lg mt-5'>
                    I'm a self-taught Frontend Developer, with a strong foundation in ReactJS, JavaScript, and modern frontend tools. I have a passion for creating responsive, user-friendly web applications that blend aesthetics with functionality. My focus is on clean code, performance optimization, and delivering seamless digital experiences.
                </p>
                <br />
                <p className='text-base md:text-lg'>
                    With a problem-solving mindset and attention to detail, I enjoy transforming designs into interactive, pixel-perfect interfaces. I stay updated with the latest industry trends and continuously sharpen my skills to build intuitive and efficient applications. I am organized, adaptable, and always eager to learn. Whether it's collaborating with a team or working independently, I take initiative and embrace challenges as opportunities to grow.
                </p>
                <br />
                <p className='text-base md:text-lg'>
                    Currently, I'm seeking an entry-level Frontend Developer role, where I can contribute my skills, gain real-world experience, and grow alongside a dynamic team.🚀
                </p>

            </div>

        </div>
    );
}

export default About;

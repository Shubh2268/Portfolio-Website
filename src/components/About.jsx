import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>

            <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='flex justify-center md:justify-start items-center pb-8 pt-0'>
                    <p className='text-2xl sm:text-3xl lg:text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-base sm:text-lg lg:text-xl mt-5'>Organized and dependable candidate, successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.</p>
                <br />
                <p className='text-base sm:text-lg lg:text-xl'>Enthusiastic Frontend Developer, eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of developement and training in Relevel. Motivated to learn, grow and excel in Software Industry.</p>

            </div>

        </div>
    )
}

export default About;

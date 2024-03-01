import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8 pt-0'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-10'>Organized and dependable candidate, successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.</p>
                <br />
                <p className='text-xl'>Enthusiastic Frontend Developer, eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of developement and training in Relevel. Motivated to learn, grow and excel in Software Industry.</p>

            </div>

        </div>
    )
}

export default About;

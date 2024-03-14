import React from 'react';
import myImage from '../assets/myImage.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='h-full md:h-screen w-full pt-24 bg-gradient-to-b from-black via-black to-gray-900'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col items-center md:items-start justify-center h-full'>
                    <h2 className='text-3xl sm:text-5xl lg:text-7xl font-bold text-white text-center md:text-start'>I'm a Frontend Developer</h2>
                    <p className='text-gray-300 py-5 max-w-md text-center md:text-start text-sm sm:text-base w-full'>I'm 23 years old. I have a great passion for building and designing software. Currently, I love to work on web application using technology like ReactJs, Tailwind, and Bootstrap.</p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center text-sm sm:text-base rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight size={20} className='ml-1' /> </span>
                        </Link>
                    </div>
                </div>

                <div className='py-10 sm:pt-0'>
                    <img src={myImage} alt='my profile' className='rounded-full border-2 border-gray-400 mx-auto w-2/3 md:w-full' />
                </div>

            </div>

        </div>
    )
}

export default Home;

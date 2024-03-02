import React from 'react';
import onnn from '../assets/portfolio/onnn.png';
import anton from '../assets/portfolio/anton.png';
import weather from '../assets/portfolio/weather.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: onnn,
            live: 'https://onnn-003.netlify.app',
            code: 'https://github1s.com/Shubh2268/IMDB-Clone/blob/HEAD/src/App.js'
        },
        {
            id: 2,
            src: anton,
            live: 'https://anton-002.netlify.app',
            code: 'https://github1s.com/Shubh2268/ANTON-Future/blob/main/src/App.js'
        },
        {
            id: 3,
            src: weather,
            live: 'https://weather-app-2-0.netlify.app',
            code: 'https://github1s.com/Shubh2268/Cloud-web-services/blob/main/src/App.js'
        }
    ];


    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-full'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8 pt-40'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 gap-x-20 gap-y-12 m-auto p-auto sm:px-0 w-3/4'>
                    {
                        portfolios.map(({ id, src, live, code }) => (
                            <div key={id} className='shadow-lg shadow-gray-600 rounded-lg hover:scale-105 ease-in duration-500'>
                                <img src={src} alt="" className='rounded-md' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-1 m-3 hover:underline font-semibold'><a href={live} target='_blank' rel="noreferrer">View Live</a></button>
                                    <button className='w-1/2 px-6 py-1 m-3 hover:underline font-semibold'><a href={code} target='_blank' rel="noreferrer">Code</a></button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Portfolio;
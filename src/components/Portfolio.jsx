import moviemap from '../assets/portfolio/moviemap.png';
import onnn from '../assets/portfolio/onnn.png';
import anton from '../assets/portfolio/anton.png';
import weather from '../assets/portfolio/weather.png';
import digitra from '../assets/portfolio/digitra.png';
import pixora from '../assets/portfolio/pixora.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: moviemap,
            live: 'https://moviemap-pro.netlify.app',
            code: 'https://github.com/Shubh2268/Movie-Map.git'
        },
        {
            id: 2,
            src: onnn,
            live: 'https://onnn.netlify.app',
            code: 'https://github.com/Shubh2268/ONNN.git'
        },
        {
            id: 3,
            src: anton,
            live: 'https://anton-pro.netlify.app',
            code: 'https://github.com/Shubh2268/ANTON.git'
        },
        {
            id: 4,
            src: weather,
            live: 'https://weather-app-2-0.netlify.app',
            code: 'https://github.com/Shubh2268/Weather-App.git'
        },
        {
            id: 5,
            src: digitra,
            live: 'https://digitra.netlify.app',
            code: 'https://github.com/Shubh2268/Digital-Web-Agency.git'
        },
        {
            id: 6,
            src: pixora,
            live: 'https://pixora-world.netlify.app',
            code: 'https://github.com/Shubh2268/Pixabay-Clone.git'
        },
    ];


    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-900 w-full text-white h-full'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8 pt-20 md:pt-40 px-2 lg:px-0 text-center sm:text-start'>
                    <p className='text-2xl sm:text-3xl lg:text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 sm:gap-x-16 lg:gap-x-20 gap-y-12 m-auto px-5 sm:px-2 w-full'>
                    {
                        portfolios.map(({ id, src, live, code }) => (
                            <div key={id} className='shadow-lg shadow-gray-600 rounded-lg hover:scale-105 ease-in duration-700'>
                                <img src={src} alt="" className='rounded-md' />
                                <div className='flex items-center justify-center'>
                                    <button className='text-sm sm:text-base w-1/2 px-6 py-1 m-3 hover:underline font-semibold'><a href={live} target='_blank' rel="noreferrer">View Live</a></button>
                                    
                                    <button className='text-sm sm:text-base w-1/2 px-6 py-1 m-3 hover:underline font-semibold'><a href={code} target='_blank' rel="noreferrer">Code</a></button>
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

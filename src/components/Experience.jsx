import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import bootstrap from '../assets/bootstrap.jpeg';
import git from '../assets/git.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImg,
            title: 'ReactJs',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: git,
            title: 'Git',
            style: 'shadow-orange-600'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        }
    ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-900 to-black w-full h-full'>
      
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-24 sm:pt-20 md:pt-72'>

            <div className='flex flex-col items-center justify-center md:items-start pb-8'>
                <p className='text-2xl sm:text-3xl lg:text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6 text-center md:text-start'>These are the Technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) =>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-12 md:w-20 mx-auto' />
                            <p className='mt-4 text-sm sm:text-base'>{title}</p>
                        </div>
                    ))
                }  
            </div>

        </div>

    </div>
  )
}

export default Experience;

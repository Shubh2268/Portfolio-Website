import React from 'react';

const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ];

    return (
        <div className='w-full z-20 fixed bg-black text-white'>

            <div className='px-5 py-3 flex items-center justify-between w-full h-full'>

                <div className='flex items-center'>
                    <h1 className='text-2xl sm:text-3xl font-signature py-2 sm:py-0'>Shubh</h1>
                </div>

                <ul className='hidden md:flex'>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='text-lg px-4 cursor-pointer capitalize font-semibold text-gray-200 hover:text-white hover:scale-105 ease-in duration-200'>
                                <a>
                                    {link}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Navbar;

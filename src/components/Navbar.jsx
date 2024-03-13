import React, { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [navigation, setNavigation] = useState(false);

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

            <div className='p-5 flex items-center justify-between w-full h-full'>

                <div className='flex items-center'>
                    <h1 className='text-2xl sm:text-3xl font-signature py-2 sm:py-0'>Shubh</h1>
                </div>

                <ul className='hidden md:flex'>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='text-lg px-4 cursor-pointer capitalize font-semibold text-gray-200 hover:shadow-md shadow-white hover:scale-105 ease-in duration-200'>
                                <Link to={link} smooth duration={500} >
                                    {link}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                {/* burger icon */}
                <div className='sm:hidden'>
                    <div className='cursor-pointer'>
                        <HiOutlineMenuAlt2 onClick={() => setNavigation(true)} size={25} />
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className={navigation ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur' : ''}>
                <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h2 className='text-2xl font-signature capitalize cursor-pointer'>Shubh</h2>
                            <div className='p-3 cursor-pointer'>
                                <LiaTimesSolid onClick={() => setNavigation(false)} size={25} />
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 flex flex-col h-fit gap-12'>

                        <ul className='capitalize'>
                            {
                                links.map(({ id, link }) => (
                                    <li key={id} className='py-2 text-lg text-center font-medium cursor-pointer'>
                                        <Link onClick={() => setNavigation(false)} offset={-75} to={link} smooth duration={500}>
                                            {link}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;

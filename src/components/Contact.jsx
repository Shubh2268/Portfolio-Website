
const Contact = () => {
    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-900 p-4 text-white'>

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pb-8 sm:pt-20 md:pt-44'>

                <div className='flex flex-col justify-center items-center'>
                    <p className='text-2xl sm:text-3xl lg:text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Please, submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/65f6786f-53db-4c96-beb1-99ae80d2c766" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="Name" placeholder='Enter Your Name' className=' my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" name="Email" placeholder='Enter Your Email' className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" name="Phone" placeholder='Enter Your Phone' className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <textarea name="Message" placeholder='Enter your message.....' rows="10" className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <button className='text-white font-semibold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 ease-in duration-300'>Let's talk</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact;

import homebg from '../../assets/images/home/homebg.jpg';
import { heroContent } from '../../constants/home/index';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <main style={{
            backgroundImage: `url(${homebg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            flexGrow: 1
        }}
        className='flex justify-center items-center flex-col relative md:min-h-[100dvh]'
        >
            <div className='absolute' />
            <motion.h1 whileInView={{ y: [-60, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }} className='font-bold text-[75px] text-[#d43131] text-center'>{heroContent.companyName}</motion.h1>
            <p className='text-gray-900 drop-shadow-md text-shadow-[0_0px_4px_#ffffff] shadow-white text-center md:w-[50%] p-3 font-semibold'>{heroContent.detail}</p>
            <br />
            {/* contact us button */}
            <Link to='/contact'>
                <button 
                    type="button" 
                    className="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-7"
                >
                Contact us
                </button>
            </Link>
        </main>
    );
};

export default Hero;
import LinkToHome from './LinkToHome';
import { motion } from 'framer-motion';

const HeroSection = ({bg, component, heading, styles }) => {
    return (
        <main style={{
            background: `url(${bg}) no-repeat center center`,
            backgroundSize: '100% 100%',
        }} className="flex justify-center items-center flex-col relative min-h-[70vh] object-cover">
            <motion.h1 
                whileInView={{ y: [-60, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                type="button" className={`${styles} rounded-lg px-5 py-2.5 text-center mr-2 mb-2 font-extrabold text-[50px]`}
            >
                {heading}
            </motion.h1>
            <div className='flex gap-2'>
                <LinkToHome />
                <div className='font-semibold text-[20px] text-slate-200'>
                    <span>{component}</span>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
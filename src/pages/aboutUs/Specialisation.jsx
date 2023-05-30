import { specialisation } from '../../constants/aboutUs/index';
import { motion } from 'framer-motion';

const Specialisation = () => {
    return (
        <section className='flex md:flex-row flex-col items-center justify-center m-10'>

            <motion.div whileInView={{ x: [-80, 0], opacity: [0, 1] }}
                transition={{ duration: 1, type: 'spring' }} className='flex flex-1 flex-col self-start gap-4'>
                <h2 className='text-amber-400 font-semibold'>{specialisation.component}</h2>
                <h1 className='font-bold text-[30px]'>{specialisation.heading}</h1>
            </motion.div>
            
            <motion.p whileInView={{ x: [80, 0], opacity: [0, 1] }}
                transition={{ duration: 1, type: 'spring' }} className='text-left flex-1 text-neutral-500 leading-10'>{specialisation.detail}</motion.p>

        </section>
    );
};

export default Specialisation;
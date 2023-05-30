import { motion } from 'framer-motion';
import LinkToHome from '../../components/LinkToHome';

const index = () => {
    return (
        <motion.div
            variants={{
                initial: { x: '100%', opacity: 0 },
                enter: { x: 0, opacity: 1, transition: {duration: 0.5, ease: 'easeInOut'} },
                exit: { x: '-100%', opacity: 0, transition: {duration: 0.5, ease: 'easeInOut'} }
            }}
            className='flex justify-center flex-col items-center h-full'
        >
            <h1>Page you are trying to access is not avalable!</h1>
            <br />
            <h2>Go back to <LinkToHome /> </h2>
        </motion.div>
    );
};

export default index;
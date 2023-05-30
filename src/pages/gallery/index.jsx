import Hero from './Hero';
import PhotoCollection from './PhotoCollection';
import { motion } from 'framer-motion';

const index = () => {
    return (
        <motion.div
            variants={{
                initial: { x: '100%', opacity: 0 },
                enter: { x: 0, opacity: 1, transition: {duration: 0.5, ease: 'easeInOut'} },
                exit: { x: '-100%', opacity: 0, transition: {duration: 0.5, ease: 'easeInOut'} }
            }}
        >
            <Hero />
            <PhotoCollection />
        </motion.div>
    );
};

export default index;
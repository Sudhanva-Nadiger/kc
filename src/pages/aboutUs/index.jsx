import HeroSection from '../../components/HeroSection';
import aboutBg from '../../assets/images/about/aboutBg.jpg';
import Specialisation from './Specialisation';
import ChooseUs from './ChooseUs';
import Explore from './Explore';
import { motion } from 'framer-motion';

const index = () => {
    const styles = 'text-white text-center whitespace-pre-wrap drop-shadow-xl shadow-gray-500';
    return (
        <motion.div
            variants={{
                initial: { x: '100%', opacity: 0 },
                enter: { x: 0, opacity: 1, transition: {duration: 0.5, ease: 'easeInOut'} },
                exit: { x: '-100%', opacity: 0, transition: {duration: 0.5, ease: 'easeInOut'} }
            }}
        >
            <HeroSection bg={aboutBg} component={'About Us'} heading={'About Us'} styles={styles}/>
            <Specialisation />
            <ChooseUs />
            <Explore />
        </motion.div>
    );
};

export default index;
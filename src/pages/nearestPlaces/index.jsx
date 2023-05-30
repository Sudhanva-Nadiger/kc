import HeroSection from '../../components/HeroSection';
import nearestPlacesBg from '../../assets/images/nearestPlaces/nearestPlacebg.webp';
import PlacesNearBy from './PlacesNearBy';
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
            <HeroSection styles={styles} component={'Nearest Places'} bg={nearestPlacesBg} putRedBg={false} heading={'Places to visit near Kalkuli Comforts'}  />
            <PlacesNearBy />
        </motion.div>
    );
};

export default index;
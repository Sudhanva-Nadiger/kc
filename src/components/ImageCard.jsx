import { motion } from 'framer-motion';

const ImageCard = ({src, alt}) => {
    return (
        <motion.div whileInView={{ y: [-60, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }} className="flex flex-col w-80 justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img loading='lazy' className="w-full h-full aspect-square rounded-lg" src={src} alt={alt}/>
        </motion.div>
    );
};

export default ImageCard;
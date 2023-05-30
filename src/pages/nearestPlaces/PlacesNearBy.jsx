
import {places} from '../../constants/nearestPlace/index';
import { motion } from 'framer-motion';

const PlacesNearBy = () => {
    return (
        <section className='flex flex-wrap justify-evenly gap-3 my-10'>
            {
                places.map((place) => (
                    <motion.div whileInView={{ x : [-60, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }} key={place.name} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                       
                        <img className="rounded-t-lg w-full h-80" src={place.image} alt={place.name} />
                      
                        <div className="p-5">
                            
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{place.name}</h5>
                            
                            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{place.distance}</p>
                            
                        </div>
                    </motion.div>
                ))
            }
        </section>
    );
};

export default PlacesNearBy;
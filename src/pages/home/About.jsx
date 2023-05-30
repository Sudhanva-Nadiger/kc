import { aboutUs } from '../../constants/home/index';
import vid from '../../assets/images/home/aboutUss.mp4';
import poster from '../../assets/images/gallery/gal-8.jpg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <>
            <motion.div whileInView={{ x: [-60, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }} className='flex p-4 flex-wrap flex-col md:flex-row gap-3 my-10 md:mx-5'>
                <section className='flex flex-col flex-1'>
                    <h3 className='font-semibold text-amber-400'>{aboutUs.component}</h3>
                    <h1 className='font-bold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full'>{aboutUs.heading}</h1>
                    <p className='text-neutral-500 leading-10'>{aboutUs.detail}</p>
                </section>

                <section className='md:flex-1 mt-3'>
                    <video preload='none' poster={poster} controls>
                        <source src={vid} type="video/mp4" className='min-h-full' />
                        Your browser does not support the video tag.
                    </video>
                </section>
            </motion.div>
        </>
    );
};

export default About;
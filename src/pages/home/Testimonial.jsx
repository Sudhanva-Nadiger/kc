import quotes from '../../assets/images/home/quotes.svg';
import { testimonial } from '../../constants/home';
import { motion } from 'framer-motion';

const FeedbackCard = ({ review, person, place }) => (
    <div style={{
        boxShadow: '0px 20px 100px -10px rgba(66, 71, 91, 0.3)'
    }} className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] my-5 feedback-card">
        <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-neutral-500 my-5">
            {review}
        </p>
        <div className="flex flex-row">
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-slate-800">
                    {person}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                    {place}
                </p>
            </div>
        </div>
    </div>
);

const Testimonial = () => {
    return (
        <motion.section whileInView={{ x: [-60, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }} id="clients" className={'py-6 flex justify-center items-center flex-col relative p-4'}>
            <div className="w-full ml-4 flex justify-between flex-col mt-2 mb-5 relative z-[1]">
                <h3 className='font-semibold text-amber-400'>Testimonials</h3>
                <h2 className='font-bold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full'>
        What People are <br className="block md:hidden" /> saying about us
                </h2>
            </div>

            <div className="flex flex-wrap justify-center md:justify-evenly w-full relative z-[1]">
                {testimonial.cards.map((card) => <FeedbackCard key={card.person} {...card} />)}
            </div>
        </motion.section>
    );
};

export default Testimonial;
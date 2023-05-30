import { pricingAndServices } from '../../constants/rooms';
import room1 from '../../assets/images/about/about-2.jpg';
import room2 from '../../assets/images/gallery/gal-2.jpg';
import room3 from '../../assets/images/gallery/gal-4.jpg';
import ImageCard from '../../components/ImageCard';
import { motion } from 'framer-motion';

const RoomCard = ({roomType, price, facilities, src}) => {
    
    return (
        <div className={'flex md:flex-row-reverse flex-col justify-evenly gap-5 md:gap-2 mb-10'}>
            {/* explanation */}
            <motion.section whileInView={{ y: [-60, 10], opacity: [0, 1] }}>
                <h2 className='font-medium xs:text-[48px] text-[40px] text-slate-950 xs:leading-[76.8px] leading-[66.8px] w-full'>
                    {roomType}
                </h2>

                <h3 className='my-2 font-extrabold text-[20px]'>
                    <sup className='p-1 font-semibold text-amber-400'>Rs</sup>

                    {price}

                    <sub className='p-1 font-semibold text-amber-400'>/day</sub> 
                    +GST
                </h3>

                <ul className='ml-10 text-neutral-500'>
                    {
                        facilities.map((facility) => (
                            <li className='list-disc leading-7' key={facility}>{facility}</li>
                        ))
                    }
                </ul>
            </motion.section>
            {/* image */}

            <div className='aspect-video flex-2 object-cover w-'>
                <ImageCard src={src} alt={roomType} />
            </div>
        </div>
    );
};

const Rooms = () => {
    const imageArr = [room1, room2, room3];
    const { roomsDetails, facilities } = pricingAndServices;
    return (
        <section id="clients" className={'lex justify-center items-center flex-col relative p-4'}>
            <div className="w-full ml-4 flex justify-between flex-col mt-2 mb-5 relative z-[1]">
                <h3 className='font-semibold text-amber-400'>Prices and Services</h3>
                <h2 className='font-bold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full mb-1'>
                    Our Rooms
                </h2>
            </div>

            <div className="flex flex-col justify-evenly items-stretch w-full mx-3 px-4">
                {roomsDetails.map((card, index) => <RoomCard key={card.type} index={index} facilities={facilities} price={card.cost} roomType={card.type} src={imageArr[index]} />)}
            </div>
        </section>
    );
};

export default Rooms;
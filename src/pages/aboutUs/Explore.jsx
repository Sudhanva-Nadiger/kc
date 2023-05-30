import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { exploreHotel } from '../../constants/aboutUs';


const Explore = () => {
    return (
        <div className='mt-10 flex flex-col'>
            <VerticalTimeline>
                {exploreHotel.map((card, index) => (
                    <VerticalTimelineElement
                        key={index}
                        contentStyle={{
                            background: 'transparent',
                            border: '0.1px solid white',
                            maxWidth: '600px'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
                        iconStyle={{ background: 'white' }}
                    >
                        <div>
                            <h3 className='text-slate-700 text-[24px] font-bold'>{card.heading}</h3>
                            <img src={card.image} alt={card.heading} />
                        </div>
                    </VerticalTimelineElement>
         
                ))}
            </VerticalTimeline>
        </div>

    );
};

export default Explore;
import ImageCard from '../../components/ImageCard';
import gal1 from '../../assets/images/gallery/gal-1.jpg';
import gal2 from '../../assets/images/gallery/gal-2.jpg';
import gal3 from '../../assets/images/gallery/gal-3.jpg';
import gal4 from '../../assets/images/gallery/gal-4.jpg';
import gal5 from '../../assets/images/gallery/gal-5.jpg';
import gal6 from '../../assets/images/gallery/gal-6.jpg';
import gal7 from '../../assets/images/gallery/gal-7.jpg';
import gal8 from '../../assets/images/gallery/gal-8.jpg';
import gal9 from '../../assets/images/gallery/gal-9.jpg';
import gal10 from '../../assets/images/gallery/gal-10.jpg';
import gal11 from '../../assets/images/gallery/gal-11.jpg';


const PhotoCollection = () => {

    return (
        <section className='flex flex-wrap gap-4 justify-evenly my-9 px-10'>
            <ImageCard alt={gal9} src={gal9} showDetail={false}/>
            <ImageCard alt={gal8} src={gal8} showDetail={false}/>
            <ImageCard alt={gal1} src={gal1} showDetail={false}/>
            <ImageCard alt={gal2} src={gal2} showDetail={false}/>
            <ImageCard alt={gal3} src={gal3} showDetail={false}/>
            <ImageCard alt={gal4} src={gal4} showDetail={false}/>
            <ImageCard alt={gal5} src={gal5} showDetail={false}/>
            <ImageCard alt={gal6} src={gal6} showDetail={false}/>
            <ImageCard alt={gal7} src={gal7} showDetail={false}/>
            <ImageCard alt={gal10} src={gal10} showDetail={false}/>
            <ImageCard alt={gal11} src={gal11} showDetail={false}/>
        </section>
    );
};

export default PhotoCollection;
import galBg from '../../assets/images/gallery/galleryHero.jpg';
import HeroSection from '../../components/HeroSection';

const Hero = () => {
    const styles = 'text-white text-center whitespace-pre-wrap drop-shadow-xl shadow-gray-500';
    return (
        <>
            <HeroSection bg={galBg} component={'Gallery'} heading={'Gallery'} styles={styles}/>
        </>
    );
};

export default Hero;
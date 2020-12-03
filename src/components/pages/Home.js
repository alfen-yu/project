import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Intro from '../Intro';
// import { MapContainer } from '../Maps';

function Home() {
    return(
        <>
        <HeroSection />
        <Intro />
        <Cards />
        {/* <MapContainer />    */}
        <Footer />
        </>
    )
}

export default Home;
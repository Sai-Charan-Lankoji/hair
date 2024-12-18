import Header from './components/Header';
import MainBanner from './components/MainBanner';
import SubBanner from './components/SubBanner';
import CategoryGrid from './components/CategoryGrid';
//import ScrollingProducts from './components/ScrollingProducts';
import TryAtHome from './components/TryAtHome';
import ShopTheLook from './components/ShopTheLook';
import NewLaunches from './components/NewLaunches';
import ExperienceCenter from './components/ExperienceCenter';
import FAQ from './components/FAQ';
import HairTransformation from './components/Transformation';
import Footer from './components/Footer';
import BrandScroll from './components/BrandScroll';
import ProductScroll from './components/ProductScroll';
import CelebrityApproval from "./components/CelebrityApproval";
import Testimonial from './components/Testimonials';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MainBanner />
      <SubBanner />
      <CategoryGrid />
      <ShopTheLook />
      <NewLaunches />
      <HairTransformation/>
      <ProductScroll />
      <TryAtHome />
      <ExperienceCenter />
      <BrandScroll />
      <CelebrityApproval />
      <Testimonial />
      <VideoPlayer />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
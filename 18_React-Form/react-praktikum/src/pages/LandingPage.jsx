import HeroSection from '../components/landingPage/HeroSection';
import ProductList from '../components/landingPage/ProductList';
import JoinNews from '../components/landingPage/JoinNews';
import Footer from '../components/Footer'

export default function CreateProduct() {
    return (
        <div className='font-roboto bg-white'>
            <HeroSection />
            <ProductList/>
            <JoinNews/>
            <Footer/>
        </div>
    )
}
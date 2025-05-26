import BestService from './components/BestServices/BestService';
import FeaturedPost from './components/FeaturedPost/FeaturedPost';
import Hero from './components/Hero/Hero';
import ProductList from './components/Product/ProductList';

export default function App() {
    return (
        <>
            <Hero />
            <ProductList />
            <BestService />
            <FeaturedPost />
        </>
    );
}

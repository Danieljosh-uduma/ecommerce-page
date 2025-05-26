import BestService from './components/BestServices/BestService';
import Conflict from './components/Conflict/Conflict';
import FeaturedPost from './components/FeaturedPost/FeaturedPost';
import ProductList from './components/Product/ProductList';
import Testimonial from './components/Testimonial/Testimonial';
import AppLayout from './Layout/AppLayout';

export default function App() {
    return (
        <>
            {/* The AppLayout component wraps the main content of the application */}
            <AppLayout>
                <ProductList />
                <BestService />
                <FeaturedPost />
                <Testimonial />
                <Conflict />
            </AppLayout>
        </>
    );
}

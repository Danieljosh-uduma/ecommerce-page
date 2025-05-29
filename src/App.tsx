import { Provider } from 'react-redux';
import BestService from './components/BestServices/BestService';
import Conflict from './components/Conflict/Conflict';
import FeaturedPost from './components/FeaturedPost/FeaturedPost';
import ProductList from './components/Product/ProductList';
import Testimonial from './components/Testimonial/Testimonial';
import AppLayout from './Layout/AppLayout';
import { store } from './state/store';

export default function App() {
    return (
        <>
            <Provider store={store}>
                {/* The AppLayout component wraps the main content of the application */}
                <AppLayout>
                    <ProductList />
                    <BestService />
                    <FeaturedPost />
                    <Testimonial />
                    <Conflict />
                </AppLayout>
            </Provider>
        </>
    );
}

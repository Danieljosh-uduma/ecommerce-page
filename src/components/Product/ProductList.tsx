import { Button } from '../common';
import ProductCard from './ProductCard';

export default function ProductList() {
    return (
        <section className="product__list">
            <div className="product__list--title">
                <h4>Featured Products</h4>
                <h3>BESTSELLER PRODUCTS</h3>
                <p>Problems trying to resolve the conflict between </p>
            </div>

            <div className="product__list--items">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <Button variant="empty" IsLoading={false}>
                LOAD MORE PRODUCT
            </Button>
        </section>
    );
}

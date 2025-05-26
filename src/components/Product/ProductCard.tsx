import { Frame5 } from '../common/images/images';
import './product.css';

export default function ProductCard() {
    return (
        <div className="product__card">
            <div className="product__image">
                <img src={Frame5} alt="Image" />
            </div>
            <div className="product__detail">
                <h6>Graphics Design</h6>
                <p>English Department</p>
                <div className="product__detail--prices">
                    <span className="old-price">$18.63</span>
                    <span className="new-price">$12.64</span>
                </div>
            </div>
        </div>
    );
}

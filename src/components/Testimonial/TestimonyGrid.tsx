import {
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
} from '../common/images/images';
import './testimonial.css';

export default function ImageGrid() {
    return (
        <div className="testimonial__image-grid">
            <div>
                <img src={Image1} alt="" />
            </div>
            <div>
                <img src={Image2} alt="" />
            </div>
            <div>
                <img src={Image3} alt="" />
            </div>
            <div>
                <img src={Image4} alt="" />
            </div>
            <div>
                <img src={Image5} alt="" />
            </div>
            <div>
                <img src={Image6} alt="" />
            </div>
            <div className="last">
                <img src={Image7} alt="" />
            </div>
            <div className="last">
                <img src={Image8} alt="" />
            </div>
            <div className="last">
                <img src={Image9} alt="" />
            </div>
        </div>
    );
}

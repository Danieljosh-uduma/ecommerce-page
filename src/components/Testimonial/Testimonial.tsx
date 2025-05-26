import { EmptyStarIcon, FilledStarIcon } from '../common/icons/Icon';
import { ProfileImage } from '../common/images/images';
import ImageGrid from './TestimonyGrid';
import './testimonial.css';

export default function Testimonial() {
    return (
        <section className="testimonial">
            <div className="testimonial__profile">
                <h3>What they say about us</h3>
                <div className="profile__image">
                    <img src={ProfileImage} alt="Profile" />
                </div>
                <div className="profile__star">
                    <FilledStarIcon className="profile__star-icon" />
                    <FilledStarIcon className="profile__star-icon" />
                    <FilledStarIcon className="profile__star-icon" />
                    <FilledStarIcon className="profile__star-icon" />
                    <EmptyStarIcon className="profile__star-icon" />
                </div>
                <p>
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                </p>
                <div className="profile__data">
                    <h6 className="name">Regina Miles</h6>
                    <h6 className="occupation">Designer</h6>
                </div>
            </div>

            <ImageGrid />
        </section>
    );
}

import { FlexContainer } from '../common';
import {
    FeatureImage1,
    FeatureImage2,
    FeatureImage3,
} from '../common/images/images';
import PostCard from './PostCard';

export default function FeaturedPost() {
    return (
        <section className="featured__list">
            <div className="featured__list--title">
                <h6>Practice Advice</h6>
                <h2>Featured Products</h2>
            </div>

            <FlexContainer className="featured__list--container">
                <PostCard image={FeatureImage1} />
                <PostCard image={FeatureImage2} />
                <PostCard image={FeatureImage3} />
            </FlexContainer>
        </section>
    );
}

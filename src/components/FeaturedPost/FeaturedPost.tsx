import FlexContainer from '../common/FlexContainer/FlexContainer';
import FeatureImage1 from '../../assets/image/images/featured-1.svg'
import FeatureImage2 from '../../assets/image/images/featured-2.svg';
import FeatureImage3 from '../../assets/image/images/featured-3.svg';
import PostCard from './PostCard';

export default function FeaturedPost() {
    return (
        <section className="featured__list">
            <div className="featured__list--title">
                <h6>Practice Advice</h6>
                <h2>Featured Products</h2>
            </div>

            <FlexContainer className='featured__list--container'>
                <PostCard image={FeatureImage1} />
                <PostCard image={FeatureImage2} />
                <PostCard image={FeatureImage3} />
            </FlexContainer>
        </section>
    );
}

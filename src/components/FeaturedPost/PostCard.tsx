import { FlexContainer, HeroImage } from '../common';
import { ArrowRightIcon, ChartIcon, ClockIcon } from '../common/icons/Icon';
import './featured-post.css';

interface PostCardProps {
    image: string;
}

export default function PostCard(props: PostCardProps) {
    const { image } = props;

    return (
        <div className="post-card">
            <div className="post-card__image">
                <HeroImage src={image} alt="Featured Post Image">
                    <span className="badge">New</span>
                </HeroImage>
            </div>

            <div className="post-card__content">
                <FlexContainer className="post-card__content-tags">
                    <h6 className="tag">Google</h6>
                    <h6>Trending</h6>
                    <h6>New</h6>
                </FlexContainer>

                <div className="post-card__content-title">
                    <h4>Loudest à la Madison #1 (L'integral)</h4>
                    <p>
                        We focus on ergonomics and meeting you where you work.
                        It's only a keystroke away.
                    </p>
                </div>

                <FlexContainer className="post-card__content-info">
                    <FlexContainer className="content__date">
                        <ClockIcon className="content-icon" />
                        <span>12 Jan 2023</span>
                    </FlexContainer>
                    <FlexContainer className="content__date">
                        <ChartIcon className="content-icon" />
                        <span>12 Comments</span>
                    </FlexContainer>
                </FlexContainer>

                <FlexContainer className="post-card__content-footer">
                    <a href="" className="btn">
                        Learn More
                    </a>
                    <ArrowRightIcon className="content-icon" />
                </FlexContainer>
            </div>
        </div>
    );
}

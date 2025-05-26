import FlexContainer from '../common/FlexContainer/FlexContainer';
import ContactBar from '../Header/ContactBar';
import NavBar from '../Header/NavBar';
import Frame1 from '../../assets/image/images/frame-1.svg';
import Frame2 from '../../assets/image/images/frame-2.svg';
import Frame3 from '../../assets/image/images/frame-3.svg';
import Frame4 from '../../assets/image/images/frame-4.svg';
import './hero.css';
import HeroImage from '../common/HeroImage/HeroImage';

export default function Hero() {
    return (
        <>
            <ContactBar />
            <NavBar />

            <section className="hero">
                <FlexContainer>
                    <div className="hero-image__left">
                        <HeroImage src={Frame1}>
                            <h6 className="success">5 Times</h6>
                            <h2>FURNITURE</h2>
                            <h6>Read More</h6>
                        </HeroImage>
                    </div>
                    <FlexContainer className="hero-image__right">
                        <div className="hero-image__right--up">
                            <HeroImage src={Frame2}>
                                <h6 className="success">5 Times</h6>
                                <h3>FURNITURE</h3>
                                <h6>Read More</h6>
                            </HeroImage>
                        </div>
                        <FlexContainer className="hero-image__right--down">
                            <div className="hero-image__right--down__left">
                                <HeroImage src={Frame3}>
                                    <h6 className="success">5 Times</h6>
                                    <h3>FURNITURE</h3>
                                    <h6>Read More</h6>
                                </HeroImage>
                            </div>
                            <div className="hero-image__right--down__right">
                                <HeroImage src={Frame4}>
                                    <h6 className="success">5 Times</h6>
                                    <h3>FURNITURE</h3>
                                    <h6>Read More</h6>
                                </HeroImage>
                            </div>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
            </section>
        </>
    );
}

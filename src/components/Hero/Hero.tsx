import { FlexContainer, HeroImage } from '../common';
import { Frame1, Frame2, Frame3, Frame4 } from '../common/images/images';
import ContactBar from '../Header/ContactBar';
import NavBar from '../Header/NavBar';

import './hero.css';

export default function Hero() {
    return (
        <>
            <header>
                <ContactBar />
                <NavBar />
            </header>

            <section className="hero">
                <FlexContainer className="hero__container">
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

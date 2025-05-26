import FlexContainer from '../common/FlexContainer/FlexContainer';
import { BookeReaderIcon, BookIcon, PathIcon } from '../common/icons/Icon';
import './bestservice.css';

export default function BestService() {
    return (
        <section className="service__list">
            <div className="service__list--title">
                <h4>Featured Products</h4>
                <h3>THE BEST SERVICES</h3>
                <p>Problems trying to resolve the conflict between </p>
            </div>

            <FlexContainer className="service__list--container">
                <FlexContainer className="service__list--item">
                    <BookeReaderIcon className="service__icon" />
                    <h3>Easy Wins</h3>
                    <p>Get your best looking smile now!</p>
                </FlexContainer>
                <FlexContainer className="service__list--item">
                    <BookIcon className="service__icon" />
                    <h3>Concrete</h3>
                    <p>
                        Defalcate is most focused in helping you discover your
                        most beautiful smile
                    </p>
                </FlexContainer>
                <FlexContainer className="service__list--item">
                    <PathIcon className="service__icon" />
                    <h3>Hack Growth</h3>
                    <p>Overcame any hurdle or any other problem.</p>
                </FlexContainer>
            </FlexContainer>
        </section>
    );
}

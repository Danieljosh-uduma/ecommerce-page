import { FlexContainer, Logo } from '../common';
import {
    FacebookBlueIcon,
    InstagramBlueIcon,
    TwitterBlueIcon,
} from '../common/icons/Icon';
import './footer.css';

export default function LogoContainer() {
    return (
        <div className="footer__logo">
            <div className="footer__logo--container">
                <div>
                    <Logo />
                </div>

                <FlexContainer className="footer__logo--social">
                    <FacebookBlueIcon className="icon" />
                    <InstagramBlueIcon className="icon" />
                    <TwitterBlueIcon className="icon" />
                </FlexContainer>
            </div>
        </div>
    );
}

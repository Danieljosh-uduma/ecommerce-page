import {
    FacebookIcon,
    InstagramIcon,
    MailIcon,
    PhoneIcon,
    TwitterIcon,
    YoutubeIcon,
} from '../common/icons/Icon';
import './style/contactbar.css';

export default function ContactBar() {
    return (
        <nav className="contact-bar">
            <ul className="contact-bar__list">
                <li className="contact-bar__contacts">
                    <div>
                        <PhoneIcon className="icon" />
                        <a href="tel:(225) 555-0118">(225) 555-0118</a>
                    </div>
                    <div>
                        <MailIcon className="icon" />
                        <a href="mailto:michelle.rivera@example.com">
                            michelle.rivera@example.com
                        </a>
                    </div>
                </li>
                <li>Follow Us and get a chance to win 80% off</li>
                <Socials />
            </ul>
        </nav>
    );
}

function Socials() {
    return (
        <li className="contact-bar__socials">
            Follow Us :
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
            >
                <FacebookIcon className="icon" />
            </a>
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
            >
                <InstagramIcon className="icon" />
            </a>
            <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
            >
                <TwitterIcon className="icon" />
            </a>
            <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
            >
                <YoutubeIcon className="icon" />
            </a>
        </li>
    );
}

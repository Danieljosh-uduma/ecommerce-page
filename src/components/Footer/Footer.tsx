import { ContactForm, FlexContainer, FooterNavList } from '../common';
import LogoContainer from './LogoContainer';
import './footer.css';

const companyLinks = [
    { id: 'about', label: 'About Us', url: '' },
    { id: 'careers', label: 'Careers', url: '' },
    { id: 'hiring', label: 'We are Hiring', url: '' },
    { id: 'blog', label: 'Blog', url: '' },
];
const featuresLinks = [
    { id: 'business', label: 'Business Market', url: '' },
    { id: 'analytics', label: 'User Analytics', url: '' },
    { id: 'chat', label: 'Live Chat', url: '' },
    { id: 'support', label: 'Unlimited Support', url: '' },
];
const resourcesLinks = [
    { id: 'devices', label: 'IOS & Android', url: '' },
    { id: 'demo', label: 'Watch a Demo', url: '' },
    { id: 'customer', label: 'Customers', url: '' },
    { id: 'api', label: 'API', url: '' },
];

export default function Footer() {
    return (
        <section className="footer">
            <LogoContainer />

            <FlexContainer className="footer__nav-container">
                <FlexContainer className="footer__nav-list-container">
                    <FooterNavList header="Company Info" links={companyLinks} />
                    <FooterNavList header="Legal" links={companyLinks} />
                    <FooterNavList header="Features" links={featuresLinks} />
                    <FooterNavList header="Resources" links={resourcesLinks} />
                </FlexContainer>
                <ContactForm />
            </FlexContainer>

            <div className="footer__copyright">
                <p>Made With Love By Finland All Right Reserved</p>
            </div>
        </section>
    );
}

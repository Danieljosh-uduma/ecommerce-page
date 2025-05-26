import type { ReactNode } from 'react';
import './heroImage.css';

interface HeroImageProps {
    src: string;
    alt?: string;
    children: ReactNode;
}

export default function HeroImage(props: HeroImageProps) {
    const { src, alt, children } = props;
    const altText = alt ? alt : '';

    return (
        <div className="hero-image__container">
            <div className="hero-image__image">
                <img src={src} alt={altText} />
            </div>
            <div className="hero-image__content">{children}</div>
        </div>
    );
}

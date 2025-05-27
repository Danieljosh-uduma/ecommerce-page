import Arrowdown from '../../../assets/image/icons/arrow-down.svg';
import Book from '../../../assets/image/icons/book.svg';
import BookeReader from '../../../assets/image/icons/booke-reader.svg';
import Cart from '../../../assets/image/icons/cart.svg';
import Chart from '../../../assets/image/icons/chart.svg';
import Clock from '../../../assets/image/icons/clock.svg';
import EmptyStar from '../../../assets/image/icons/empty-star.svg';
import Facebook from '../../../assets/image/icons/facebook.svg';
import FacebookBlue from '../../../assets/image/icons/facebook-blue.svg';
import FilledStar from '../../../assets/image/icons/filled-star.svg';
import Heart from '../../../assets/image/icons/heart.svg';
import Instagram from '../../../assets/image/icons/instagram.svg';
import InstagramBlue from '../../../assets/image/icons/instagram-blue.svg';
import Mail from '../../../assets/image/icons/mail.svg';
import MenuBar from '../../../assets/image/icons/menu-bar.svg';
import Path from '../../../assets/image/icons/path.svg';
import Phone from '../../../assets/image/icons/phone.svg';
import Profile from '../../../assets/image/icons/profile.svg';
import Search from '../../../assets/image/icons/search.svg';
import Twitter from '../../../assets/image/icons/twitter.svg';
import TwitterBlue from '../../../assets/image/icons/twitter-blue.svg';
import Youtube from '../../../assets/image/icons/youtube.svg';
import ArrowRight from '../../../assets/image/icons/arrow-right.svg';
import MobileSearch from '../../../assets/image/icons/mobile-search.svg';
import MobileCart from '../../../assets/image/icons/mobile-cart.svg';

interface IconProps {
    className?: string;
}

function ArrowdownIcon({ className }: IconProps) {
    return <img src={Arrowdown} className={className} alt="Arrow Down Icon" />;
}

function BookIcon({ className }: IconProps) {
    return <img src={Book} className={className} alt="Book Icon" />;
}

function BookeReaderIcon({ className }: IconProps) {
    return (
        <img src={BookeReader} className={className} alt="Booke Reader Icon" />
    );
}

function CartIcon({ className }: IconProps) {
    return <img src={Cart} className={className} alt="Cart Icon" />;
}

function ChartIcon({ className }: IconProps) {
    return <img src={Chart} className={className} alt="Chart Icon" />;
}

function ClockIcon({ className }: IconProps) {
    return <img src={Clock} className={className} alt="Clock Icon" />;
}

function EmptyStarIcon({ className }: IconProps) {
    return <img src={EmptyStar} className={className} alt="Empty Star Icon" />;
}

function FacebookIcon({ className }: IconProps) {
    return <img src={Facebook} className={className} alt="Facebook Icon" />;
}

function FacebookBlueIcon({ className }: IconProps) {
    return (
        <img
            src={FacebookBlue}
            className={className}
            alt="Facebook Blue Icon"
        />
    );
}

function FilledStarIcon({ className }: IconProps) {
    return (
        <img src={FilledStar} className={className} alt="Filled Star Icon" />
    );
}

function HeartIcon({ className }: IconProps) {
    return <img src={Heart} className={className} alt="Heart Icon" />;
}

function InstagramIcon({ className }: IconProps) {
    return <img src={Instagram} className={className} alt="Instagram Icon" />;
}

function InstagramBlueIcon({ className }: IconProps) {
    return (
        <img
            src={InstagramBlue}
            className={className}
            alt="Instagram Blue Icon"
        />
    );
}

function MailIcon({ className }: IconProps) {
    return <img src={Mail} className={className} alt="Mail Icon" />;
}

function MenuBarIcon({ className }: IconProps) {
    return <img src={MenuBar} className={className} alt="Menu Bar Icon" />;
}

function PathIcon({ className }: IconProps) {
    return <img src={Path} className={className} alt="Path Icon" />;
}

function PhoneIcon({ className }: IconProps) {
    return <img src={Phone} className={className} alt="Phone Icon" />;
}

function ProfileIcon({ className }: IconProps) {
    return <img src={Profile} className={className} alt="Profile Icon" />;
}

function SearchIcon({ className }: IconProps) {
    return <img src={Search} className={className} alt="Search Icon" />;
}

function TwitterIcon({ className }: IconProps) {
    return <img src={Twitter} className={className} alt="Twitter Icon" />;
}

function TwitterBlueIcon({ className }: IconProps) {
    return (
        <img src={TwitterBlue} className={className} alt="Twitter Blue Icon" />
    );
}

function YoutubeIcon({ className }: IconProps) {
    return <img src={Youtube} className={className} alt="Youtube Icon" />;
}

function ArrowRightIcon({ className }: IconProps) {
    return (
        <img src={ArrowRight} className={className} alt="Arrow Right Icon" />
    );
}

function MobileSearchIcon({ className }: IconProps) {
    return (
        <img
            src={MobileSearch}
            className={className}
            alt="Mobile Search Icon"
        />
    );
}

function MobileCartIcon({ className }: IconProps) {
    return (
        <img src={MobileCart} className={className} alt="Mobile Cart Icon" />
    );
}

export {
    ArrowdownIcon,
    BookIcon,
    BookeReaderIcon,
    CartIcon,
    ChartIcon,
    ClockIcon,
    EmptyStarIcon,
    FacebookIcon,
    FacebookBlueIcon,
    FilledStarIcon,
    HeartIcon,
    InstagramIcon,
    InstagramBlueIcon,
    MailIcon,
    MenuBarIcon,
    PathIcon,
    PhoneIcon,
    ProfileIcon,
    SearchIcon,
    TwitterIcon,
    TwitterBlueIcon,
    YoutubeIcon,
    ArrowRightIcon,
    MobileSearchIcon,
    MobileCartIcon,
};

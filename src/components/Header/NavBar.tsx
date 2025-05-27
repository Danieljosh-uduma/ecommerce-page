import { useState } from 'react';
import {
    ArrowdownIcon,
    CartIcon,
    HeartIcon,
    MenuBarIcon,
    MobileCartIcon,
    MobileSearchIcon,
    ProfileIcon,
    SearchIcon,
} from '../common/icons/Icon';
import './style/navbar.css';
import { FlexContainer, Logo } from '../common';
import { useEffect } from 'react';

export default function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setShowNavbar(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setShowNavbar(!showNavbar);
    }

    return (
        <>
            <nav>
                <div className="navbar__navitem--mobile">
                    <FlexContainer className="navbar__navitem--mobile--container">
                        <Logo />

                        <FlexContainer>
                            <a href="" title="Search">
                                <MobileSearchIcon />
                            </a>
                            <a href="" title="Cart">
                                <MobileCartIcon />
                            </a>
                            <a href="" title="Menu" onClick={handleClick}>
                                <MenuBarIcon />
                            </a>
                        </FlexContainer>
                    </FlexContainer>
                </div>
                {showNavbar && (
                    <div className="navbar__navitem--mobile--menu">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="" className="thin">
                                    Product
                                </a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
            <nav className="navbar">
                <div className="navbar__navItems">
                    <Logo />

                    <ul className="navbar__navigations">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li className="navbar__dropdown">
                            <span
                                className="navbar__dropdown--head"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                Shop <ArrowdownIcon />{' '}
                            </span>
                            {showDropdown && (
                                <div className="navbar__dropdown--items">
                                    <p>
                                        <a href="">Home wares</a>
                                    </p>
                                    <p>
                                        <a href="">Office wares</a>
                                    </p>
                                    <p>
                                        <a href="">Kitchen wares</a>
                                    </p>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">Pages</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar__actions">
                    <FlexContainer className="navbar__actions--left">
                        <span>
                            <ProfileIcon />
                            Login
                        </span>
                        /<span>Register</span>
                    </FlexContainer>
                    <FlexContainer className="navbar__actions--right">
                        <span>
                            <a href="" title="Search">
                                <SearchIcon />
                            </a>
                        </span>
                        <span>
                            <a href="">
                                <CartIcon /> 1
                            </a>
                        </span>
                        <span>
                            <a href="">
                                <HeartIcon /> 1
                            </a>
                        </span>
                    </FlexContainer>
                </div>
            </nav>
        </>
    );
}

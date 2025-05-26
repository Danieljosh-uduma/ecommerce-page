import { useState } from 'react';
import {
    ArrowdownIcon,
    CartIcon,
    HeartIcon,
    ProfileIcon,
    SearchIcon,
} from '../common/icons/Icon';
import './style/navbar.css';
import FlexContainer from '../common/FlexContainer/FlexContainer';

export default function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__navItems">
                <a href="">
                    <h3 className="navbar__logo">Bandage</h3>
                </a>

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
    );
}

import React from 'react';
import './Navigation.scss';
import Logo from '../Logo/Logo';

const Navigation = () => {
    return (
        <nav>
             <Logo />
            <div className="link">Sign Out</div>
        </nav>
    )
}

export default Navigation;

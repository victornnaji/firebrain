import React from 'react';
import Tilt from 'react-tilt';
import './Logo.scss';
import brain from './brain2.png';

const Logo = () => {
    return (
       <div className="">
            <Tilt style={{ height: 0, width: 150 }} >
                <div className="Tilt-inner"> <img src={brain} alt="brain"></img> </div>
            </Tilt>
       </div>
    )
}

export default Logo;

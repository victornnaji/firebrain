import React, {useState} from 'react';
import './Navigation.scss';
import Logo from '../Logo/Logo';
import Rank from '../Rank/Rank';


const Navigation = () => {
    const [link, setlink] = useState("General Face");

    return (
        <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                <Logo/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="link" onClick={ () => setlink('General Face')}>General Face</div>
                        {/* <div className="link" onClick={ () => setlink('Detect Celebrities')}>Detect Celebrities</div>
                        <div className="link" onClick={ () => setlink('Detect Items')}>Detect Items</div> */}
                        <div className="link">Sign Out</div>
                    </div>
                </div>
            </nav>
            <Rank link={link}/>
        </React.Fragment>
        
    )
}

export default Navigation;

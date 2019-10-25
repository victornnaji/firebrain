import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import "./App.scss";

const particlesOptions = {
  "particles": {
    "number": {
        "value": 100,
        density:{
          enable: true,
          value_area: 800
        }
    },
    "size": {
        "value": 3
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
}

function App() {
  return (
    <div className="App">
      <div className="container">
      <Particles params={particlesOptions} className="particles"/>
        <Navigation />
        <Rank />
        <ImageLinkForm />
      </div>
    </div>
  );
}

export default App;

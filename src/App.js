import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation />
        <ImageLinkForm />
      </div>
    </div>
  );
}

export default App;

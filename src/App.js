import React, {useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import "./App.scss";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


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

const app = new Clarifai.App({
  apiKey: '08c85db1dc94491fb05c0d224671e401'
 });

 

function App() {
  const [image, setImage] = useState("");
  const [clariface, setclariface] = useState([]);
  const [btn, setbtn] = useState('')

  const calFaceLocation = async (data) => {
    const clariface = data.outputs[0].data.regions;
    setclariface(clariface);
   }
  

 const onSearchSubmit = async (terms) =>{
  app.models.predict(Clarifai.FACE_DETECT_MODEL, `${terms}`).then(response => {
    setImage(terms);
    return response;
  }).then(
    data => {
      calFaceLocation(data);
    }
  ).catch(err => {
    console.log(err);
  })
 }

 const onButtonClick = (value) => {
   setbtn(value)
 }

//  const getBtnState = (link) =>{
//    console.log(link);
//  }

 

  return (
    <div className="App">
      <div className="container">
      <Particles params={particlesOptions} className="particles"/>
        <Navigation 
        // getBtnState={getBtnState}
        />
        <ImageLinkForm  onSubmitt={onSearchSubmit} onButtonClick={onButtonClick}/>
        <FaceRecognition  image={image} clariface={clariface} btnState={btn}/>
      </div>
    </div>
  );
}

export default App;

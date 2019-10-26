import React, {useState, useEffect} from 'react';
import './FaceRecognition.scss';
import CircularSpinner from '../CircularSpinner/CircularSpinner';

const FaceRecognition = ({image, clariface, btnState}) => {
  const [loading, setloading] = useState(false);
  const displayImage = document.querySelector("#displayImage");
  let arr = [];

  if(clariface === undefined){
    image = 'https://pbs.twimg.com/media/CECpBQmVAAAgHfj.png';
  }else{
    clariface.map( box => {
      box = box.region_info.bounding_box;
      const width = Number(displayImage.width);
      const height = Number(displayImage.height);

      return arr.push({
        leftCol: box.left_col  * width,
        topRow: box.top_row * height,
        rightCol: width - (box.right_col * width),
        bottomRow: height  - (box.bottom_row * height) 
      })

  });
  }

  useEffect(() => {
    setloading(btnState);
  },[btnState]);


  const onImageLoad = () =>{
    setloading(false);
  }

    return (
        <div className="faceRecognition-container">
          <div className="container">
              <div className="image-holder">
                 <img id="displayImage" src={image} alt="" className="displayImage" onLoad={onImageLoad}/>
                 {arr.map( (box, i) => (
                    <div key={i} className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom:box.bottomRow, left: box.leftCol}}></div>
                 ))}
                 {loading ? 
                 (<CircularSpinner />) : null}
              </div>
          </div>
        </div>
    )
}

export default FaceRecognition;

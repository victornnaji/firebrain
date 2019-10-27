import React from 'react';
import './Rank.scss';

const Rank = ({link}) => {
    let x = ''; 
    if(link ==='Detect Celebrities'){
        x = 'Celebrities Faces';
    }else if (link === 'Detect Items'){
        x = "Items"
    }else{
        x = 'faces in an image'
    }

    return (
        <div className="Rank-container">
           <div className="container">
               <div className="rank-content">
               {'Add image link to detect'} <span>{x}</span>
               </div>
           </div>
        </div>
    )
}

export default Rank;

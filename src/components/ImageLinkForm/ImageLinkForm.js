import React from 'react';
import './ImageLinkForm.scss';

const ImageLinkForm = () => {
    return (
        <div className="ImageLinkForm">
           <div className="container">
                <form className="form">
                    <input type="url" className="form__field" placeholder="https://" />
                    <button type="submit" className="btn">Detect</button>
                </form>
           </div>
        </div>
    )
}

export default ImageLinkForm;

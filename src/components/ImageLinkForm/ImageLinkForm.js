import React from 'react';
import './ImageLinkForm.scss';

const ImageLinkForm = () => {
    return (
        <div className="ImageLinkForm">
           <div className="container">
                <form class="form">
                    <input type="url" class="form__field" placeholder="Your Image link" />
                    <button type="button" class="btn">Send</button>
                </form>
           </div>
        </div>
    )
}

export default ImageLinkForm;

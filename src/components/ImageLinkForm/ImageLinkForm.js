import React, {useState}from 'react';
import './ImageLinkForm.scss';

const ImageLinkForm = (props) => {
    const [url, setUrl] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        props.onSubmitt(url);
    }

    return (
        <div className="ImageLinkForm">
           <div className="container">
                <form className="form" onSubmit={submitHandler}>
                    <input onChange={(e) => setUrl(e.target.value)} type="text" className="form__field" placeholder="https://" />
                    <button type="submit" className="btn">Detect</button>
                </form>
           </div>
        </div>
    )
}

export default ImageLinkForm;

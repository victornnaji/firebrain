import React, {useState}from 'react';
import './ImageLinkForm.scss';

const ImageLinkForm = (props) => {
    const [url, setUrl] = useState('');
    const [btn, setBtn] = useState(false);

    const submitHandler = (e) =>{
        e.preventDefault();
        props.onSubmitt(url);
        props.onButtonClick(btn);
    }


   const onChangeHandler = (e) => {
        setUrl(e.target.value);
        setBtn(true);
    }


    return (
        <div className="ImageLinkForm">
           <div className="container">
                <form className="form" onSubmit={submitHandler}>
                    <input onChange={onChangeHandler} type="text" className="form__field" placeholder="https://" />
                    <button type="submit" className="btn">Detect</button>
                </form>
           </div>
        </div>
    )
}

export default ImageLinkForm;

import React, {useContext} from 'react';
import AppContext from './Context';
import './styles.css';

const FormThree = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;
    return (
        <div className="container">
            <p>Enter your vehicle details</p>
            <div className="formContainer">
                <form className="form">
                    <label>
                    <select className="formSelect" onChange={e => updateContext.setBrand(e.target.value)}>
                        <option >Select Brand</option>
                        <option value="tesla">Tesla Motors</option>
                        <option value="ford">Ford</option>
                    </select>
                    </label>
                    <label>
                    <select className="formSelect" onChange={e => updateContext.setModel(e.target.value)} >
                        <option>Vehicle Model</option>
                        <option value="type-one">Type One</option>
                        <option value="model-x">Model X</option>
                    </select>
                    </label>
                    <label>
                    <select className="formSelect" onChange={e => updateContext.setYear(e.target.value)}>
                        <option >Manufacturing Year</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                    </select>
                    </label>
                    <input className="formInput" type="text" placeholder="Vehicle Value" />
                    <button className="formSubmit" value="Next" type="submit" onClick={() => updateContext.setStep(updateContext.currentPage + 1)}>Next </button>
                </form>
            </div>
        </div>
    );
};

export default FormThree;
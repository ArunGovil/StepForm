import React, {useContext} from 'react';
import AppContext from './Context';
import './styles.css';

const FormFour = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;
    return (
        <div className="container">
            <p>Enter your details</p>
            <div className="formContain">
                <form className="form">
                    <input className="formInput" type="text" placeholder="Date of Birth" required/>
                    <input className="formInput" type="text" placeholder="License Issue" required/>
                    <input className="formInput" type="text" placeholder="Company Name" onChange={e => updateContext.setCompany(e.target.value)} required/>
                    <button className="formSubmit" value="Next" type="submit" onClick={() => updateContext.setStep(updateContext.currentPage + 1)}>Next </button>
                </form>
            </div>
        </div>
    );
};

export default FormFour;
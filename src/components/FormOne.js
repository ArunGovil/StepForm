import React, { useContext } from 'react';
import AppContext from './Context';
import './styles.css';

const FormOne = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    return (
        <div className="contain">
            <p>Enter Your Details</p>
            <form className="form">
                <input className="formInput" type="text" placeholder="Customer Name" onChange={e => updateContext.setName(e.target.value)} required/>
                <input className="formInput" type="email" placeholder="Email Id" onChange={e => updateContext.setEmail(e.target.value)} />
                <input className="formInput" type="text" placeholder="Phone Number" onChange={e => updateContext.setPhone(e.target.value)}  required/>
                <button type="submit" className="formSubmit" onClick={() => updateContext.setStep(updateContext.currentPage + 1)} >Next</button>
            </form>
        </div>
    );
};

export default FormOne;
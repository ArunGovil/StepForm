import React, { useContext } from 'react';
import AppContext from './Context';
import './styles.css';

const FormOne = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.userName == null) {
            console.log('Name cannot be empty')
        } else if (updateContext.userMail == null) {
            console.log('Email cannot be empty')
        } else if (updateContext.userPhone == null) {
            console.log('Phone cannot be empty')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain">
            <p>Enter Your Details</p>
            <form className="form">
                <input className="formInput" type="text" placeholder="Customer Name" onChange={e => updateContext.setName(e.target.value)} required/>
                <input className="formInput" type="email" placeholder="Email Id" onChange={e => updateContext.setEmail(e.target.value)} required/>
                <input className="formInput" type="text" placeholder="Phone Number" onChange={e => updateContext.setPhone(e.target.value)}  required/>
                <button type="submit" className="formSubmit" onClick={next} >Next</button>
            </form>
        </div>
    );
};

export default FormOne;
import React, { useContext } from 'react';
import AppContext from './Context';
import './styles.css';

const FormOne = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (updateContext.userName == null) {
            console.log('Please enter your Name')
        } else if (updateContext.userMail == null || regex.test(updateContext.userMail) !== true) {
            console.log('Please enter your email correctly')
        } else if (updateContext.userPhone == null || updateContext.userPhone.length !== 10 ) {
            console.log('Please enter your phone number correctly')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain">
            <p>Enter Your Details</p>
            <form className="form">
                <input className="formInput" type="text" placeholder="Customer Name" onChange={e => updateContext.setName(e.target.value)} required/>
                <input className="formInput" type="email" placeholder="Email Id" onChange={e => updateContext.setEmail(e.target.value)} required/>
                <input className="formInput" type="text" placeholder="Phone Number" maxLength="10" onChange={e => updateContext.setPhone(e.target.value)}  required/>
                <button type="button" className="formSubmit" onClick={next} >Next</button>
            </form>
        </div>
    );
};

export default FormOne;
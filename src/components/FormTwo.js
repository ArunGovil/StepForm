import React, {useContext} from 'react';
import AppContext from './Context';
import './styles.css'

const FormTwo = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;
    
    return (
        <div className="container">
            <p>Enter the OTP recieved on your Phone no. <b>{updateContext.userPhone}</b></p>
            <img className="otpimg" src="https://ecall-messaging.com/wp-content/uploads/2020/11/eCall_Illustration_mTAN.svg" alt="otp-img" />
            <div className="formContain">
                <form className="form">
                    <input className="formInput" type="text" placeholder="Enter OTP" onChange={e => updateContext.setOTP(e.target.value)} required/>
                    <button className="formSubmit" value="Next" type="submit" onClick={() => updateContext.setStep(updateContext.currentPage + 1)}>Next </button>
                </form>
            </div>
        </div>
    );
};

export default FormTwo;
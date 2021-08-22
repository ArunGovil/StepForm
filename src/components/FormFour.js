import React, {useContext} from 'react';
import AppContext from './Context';
import './styles.css';

const FormFour = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.userDOB == null) {
            console.log('Date cannot be empty')
        } else if (updateContext.issueDate == null) {
            console.log('License cannot be empty')
        } else if (updateContext.companyName == null) {
            console.log('Company cannot be empty')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="container">
            <p>Enter your details</p>
            <div className="formContain">
                <form className="form">
                    <input className="formInput" type="text" placeholder="Date of Birth" onChange={e => updateContext.setDOB(e.target.value)} required/>
                    <input className="formInput" type="text" placeholder="License Issue" onChange={e => updateContext.setIssue(e.target.value)} required/>
                    <input className="formInput" type="text" placeholder="Company Name" onChange={e => updateContext.setCompany(e.target.value)} required/>
                    <div className="multipleButtons">
                    <button className="multipleButton" value="Previous" type="button" onClick={() => updateContext.setStep(updateContext.currentPage - 1)}>Previous </button>
                    <button className="multipleButton" value="Next" type="button" onClick={next}>Next </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormFour;
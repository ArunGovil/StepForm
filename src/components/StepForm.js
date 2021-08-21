import React, {useState} from 'react';
import './styles.css';
import AppContext from './Context';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';
import FormFinish from './FormFinish';
import ProgressBar from './ProgressBar';

const StepForm = () => {

    const [step, setStep] = useState(0);
    const [name, setName] = useState('Tester John');
    const [email, setEmail] = useState('test@test.com');
    const [phone, setPhone] = useState('12345678');
    const [otp, setOTP] = useState(1234);
    const [brand, setBrand] = useState('test-brand');
    const [model, setModel] = useState('test-car');
    const [year, setYear] = useState('2000');
    const [value, setValue] = useState(250);
    const [dob, setDOB] = useState(1998);
    const [issue, setIssue] = useState(1999);
    const [company, setCompany] = useState('sample-company');

    const userDetails = {
        currentPage: step,
        userName: name,
        userMail: email,
        userPhone: phone,
        userOTP: otp,
        vehBrand: brand,
        userVehicle: model,
        vehYear: year,
        vehValue: value,
        userDOB: dob,
        issueDate: issue,
        companyName: company,
        setName,
        setEmail,
        setPhone,
        setStep,
        setOTP,
        setBrand,
        setModel,
        setYear,
        setValue,
        setDOB,
        setIssue,
        setCompany,
    };
    
    return (
        <AppContext.Provider value={{userDetails}}>
            <div className="main">
            <div className="navbar">
                 <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg" alt="logo" />
             </div>
             <div className="body">
                 <h3>Multi Step Form using ReactJS</h3>
                 <div className="wrapper">
                 <ProgressBar />
                 {step === 0 && <FormOne /> }
                 {step === 1 && <FormTwo /> }
                 {step === 2 && <FormThree /> }
                 {step === 3 && <FormFour /> }
                 {step === 4 && <FormFinish /> }
                 </div>
             </div>
        </div>
        </AppContext.Provider>
    );
};

export default StepForm;
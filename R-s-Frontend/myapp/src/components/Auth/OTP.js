import React, { useState } from "react";
import { apiVerifyOtp } from "../../ApiService/AuthApi";
import { localStorageKey } from "../../Utils/enumconstant";
import { isNumber } from "../../Utils/UtilFunctions";
import Navbar from "../Navbar/Navbar";
import OtpInput, { OtpInputProps } from 'react-otp-input'
import { Navigate, useNavigate } from "react-router-dom";
import './OTP.css'
export const OTP = () => {
    const [otpcode, setOtpcode] = useState('');
    const navigate=useNavigate();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userdata = JSON.parse(localStorage.getItem(localStorageKey.OTP_DATA))
            console.log(userdata)
            if (userdata) {

                const res = await apiVerifyOtp({ otpCode: otpcode, operation: userdata.operation, email: userdata.email })
                if (res.data.success) {
                  
                    navigate('/resetpassword');

                }
            }
        }
        catch (err) {
            console.log(err)

        }
    }

    return (
        <div  >
                <Navbar />
            <div className="container card card-flow">


                <h1>Enter email verification code</h1>
                <OtpInput className="otpstyle"  numInputs={6} inputStyle={{width:"100%"}} isInputNum placeholder="enter your otp" type="text" value={otpcode} onChange={setOtpcode} />

                <div className="d-flex">
                <button className="btn btn-danger btn-design" >Cancel</button>


                <button className="btn btn-primary btn-design2 " onClick={handleSubmit}>Send</button>

                </div>
            </div>
        </div>
    )
}
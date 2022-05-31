import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../coreUI/Input/Input";
import { useState,useRef } from "react";
import './ForgetPassword.css'
import { validateEmail } from "../../Utils/validations";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { localStorageKey, userOperations } from "../../Utils/enumconstant";
import { apiAuthForgotPassword } from "../../ApiCallsTem/AuthApi";
import { apiForgetPassword } from "../../ApiService/AuthApi";

function ForgetPassword(){
    const [email,setEmail]=useState("");
    const [errorState, setErrorState] = useState(null)
    const emailIdRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate=useNavigate()
    const handleChange=(e)=>{
        
        const value=e.target.value
        setEmail(value)
       
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
            try {
                const res = await apiForgetPassword({email:email}) 
                if(res.data.success)  {
                
                    localStorage.setItem(localStorageKey.OTP_DATA, JSON.stringify({email:email,operation:userOperations.FORGOT_PASSWORD})) 
                    navigate('/otpcode')
                    
                    
                }
  
            }
            catch (err) {
                console.log(err)
            }
    
    }
    // const validFormState = () => {
    //     let _error = {}
       
    //     if (!validateEmail(loginData.email)) {
    //       _error.email = "Please enter valid emailId address"
    //       emailIdRef.current?.focus()
    
    //     }
        
    //     setErrorState(_error)
    //     return Object.keys(_error).length === 0
    //   }
    return(
        <div >
            <Navbar/>
            <div className="container card contain-design">

            <h1> Forgot your Password?</h1>
           <form onSubmit={handleSubmit} className="form-group">
            <p> Enter your email. You will recieve and OTP verification code to reset your password</p>
            <label>Email Address</label>
            <input  ref={emailIdRef} autoFocus={true} error={errorState?.email || null} type='text' name='email' value={email}className="form-control mb-3" onChange={handleChange}  placeholder="Enter your email"></input>
            
            <button className="btn btn-primary " >Send</button>
            
           


            

           </form>
            </div>

        </div>
    )

}
export default ForgetPassword
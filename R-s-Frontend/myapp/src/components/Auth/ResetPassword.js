import React, { useState,useRef, } from "react";
import { apiResetPassword } from "../../ApiService/AuthApi";
import { localStorageKey, userOperations } from "../../Utils/enumconstant";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const initialInput={password:'',confirmPassword:""}
function ResetPassword(){
   
    const [passwordInput,setPasswordInput]=useState(initialInput);
    const [errorState, setErrorState] = useState(null);
    const navigate=useNavigate()
    const confirmpasswordRef=useRef(null)

    const handleChange=(e)=>{
        const {name,value}=e.target
        setPasswordInput(prevstate=>{
            return ({...prevstate,[name]:value})
        })
        console.log(value)
       
        
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
       

            try {
                const userdata = JSON.parse(localStorage.getItem(localStorageKey.OTP_DATA))
                console.log(userdata)
                if (userdata) {
    
                    const res = await apiResetPassword({  operation: userOperations.RESET_PASSWORD, email: userdata.email,password:passwordInput.password })
                    if (res.data.success) {
                        localStorage.removeItem(localStorageKey.OTP_DATA)
                        navigate('/login');
    
                    }
                }
            }
            catch(e){
                console.log(e)
    
            }
        

    }
    function validation(){
        let _error={}
        if(passwordInput.password!==passwordInput.confirmPassword){
            _error.confirmPassword = "Password does not match"
            confirmpasswordRef.current?.focus()

        }


    }
    return(
        <div>
            <Navbar/>
            <div className="container card ">
            <h1> Reset your Password?</h1>
            <form onSubmit={handleSubmit} className="form-group">
            <label>New Password</label>
            <input className="form-control mb-3" value={passwordInput.password} onChange={handleChange} name="password" type="password" placeholder="Enter your new password"></input>
            <label>Confirm your Password</label>
            <input className="form-control mb-3" value={passwordInput.confirmPassword} onChange={handleChange} name="confirmPassword" ref={confirmpasswordRef} type="password" error={errorState?.confirmPassword || null} placeholder="Enter your new password"></input>
            <button className="btn btn-primary " >Send</button>
           </form>
            </div>
        </div>
    )
}
export default ResetPassword
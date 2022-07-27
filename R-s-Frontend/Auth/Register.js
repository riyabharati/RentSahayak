import React, {useState,useRef} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Register.css'
import { apiAuthRegister } from "../../ApiService/AuthApi";
import { localStorageKey, userCategory, userOperations } from "../../Utils/enumconstant";
import { useNavigate } from 'react-router-dom'
import './Register.css';
import axios from 'axios';
import { validateEmail } from "../../Utils/validations";
import { configConsumerProps } from "antd/lib/config-provider";

const initialRegisterData={fullName:"",email:"",password:"",category:userCategory.TENANT}


function Register(){
    const [registerData, setRegisterData] = useState(initialRegisterData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorState, setErrorState] = useState(null)
    const emailIdRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate=useNavigate()
    function handleChange(e) {
      const {name,value}=e.target
        setRegisterData(prevState=>({...prevState,[name]:value}))
        errorState && delete errorState[name]

    }
    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true)
        if(validFormState()){
          try{

            const {fullName,...remainingData}=registerData
            
            const res=await apiAuthRegister({...remainingData,profile:{fullName}});
            console.log(res)
    
            localStorage.setItem(localStorageKey.REGISTER, JSON.stringify({email:registerData.email,operation:userOperations.REGISTER}))
            navigate('/otpregister')
          }
          catch (err) {
            const { response } = err
            const errorMessage = response?.data?.message || 'Error register'
            setErrorState({ password: errorMessage })
            passwordRef.current?.focus()
            
    
          }
          setIsSubmitting(false)

        }
        

      

    }
    const validFormState = () => {
      let _error = {}
      if (!registerData.password) {
        _error.password = "Password is required"
        passwordRef.current?.focus()
      }
      if (!validateEmail(registerData.email)) {
        _error.email = "Please enter valid emailId address"
        emailIdRef.current?.focus()
  
      }
      if (!registerData.email) {
        _error.email = "email address is required"
        emailIdRef.current?.focus()
      }
      setErrorState(_error)
      return Object.keys(_error).length === 0
    }
    return(
        <div>
            <Navbar/>
            <div className="containers">
        <div className="login-form">
          <div className="main-div">
            <div className="signup">
              <h2 className="text-design-h2">Register to your account</h2>
              <p>
                Already have an account?{" "}
                <span className="glyphicon glyphicon-log-in " /><a href="/login">Login</a> 
              </p>
            </div>
            <div>
              <h2 className="text-design">Register</h2>
              <b>
                <hr />
              </b>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                className="form-control mb-3 "
                
                name="fullName"
                placeholder="enter your fullname"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange}
                value={registerData.email}
                type="text"
                autoFocus={true}
                className="form-control mb-3"
                error={errorState?.email || null}
                ref={emailIdRef}
                name="email"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                ref={passwordRef}
                type="password"
                error={errorState?.password || null}
                className="form-control mb-3 "
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="password"
                className="form-control mb-3"
                name="confirmpassword"
                placeholder="confirm your Password"
              />
            </div>
            <div className="form-group d-flex ">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Tenant
                </label>
                
            
              </div>
              <div class="form-check ml-3" >
                <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Renter
                </label>
            
              </div>
            </div>
            <button loading={isSubmitting} className="btn register-button text-white" onClick={handleSubmit}>Regitser</button>
            
          </div>
        </div>
      </div>
      <Footer/>

        </div>
    )
}
export default Register
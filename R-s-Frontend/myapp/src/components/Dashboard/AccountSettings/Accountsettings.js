import Navbar from "../../Navbar/Navbar";
import Sidebar from "../Sidebar";
import React, { useState,useRef, } from "react";

import { useNavigate } from "react-router-dom";
import './Accountsetting.css'
import { Button, Checkbox, Form, Input } from 'antd';
import { apiResetPassword } from "../../../ApiService/AuthApi";
import { localStorageKey, userOperations } from "../../../Utils/enumconstant";

const initialInput={password:'',confirmPassword:""}
export default function Accountsettings() {
  const [passwordInput,setPasswordInput]=useState(initialInput)
  const [errorState, setErrorState] = useState(null);
  const navigate=useNavigate()
  const confirmpasswordRef=useRef(null)
 

   
  const onFinish = async(values) => {
    try{
      const userdata = JSON.parse(localStorageKey.getItem(localStorageKey.OTP_DATA))
      if(userdata){
        const res=await apiResetPassword({ operation: userOperations.RESET_PASSWORD, email: userdata.email,password:passwordInput.password })
        if (res.data.success) {
          localStorage.removeItem(localStorageKey.OTP_DATA)
          navigate('/change-password');

      }
      }

    }
    catch(e){
      console.log(e)

  }


  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container-main">

        <Form
          className="form-style"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="New Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>



    </div>
  )
}

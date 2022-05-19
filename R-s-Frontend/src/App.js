import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Property from "./components/Property/Property";
import RenterBoard from "./components/Dashboard/Renterdashboard/RenterBoard";
import './App.css';
import IndexPage from "./components/Property/IndexPage";
import ViewProperty from "./components/Property/PropertyList/ViewProperty";
import ForgetPassword from "./components/Auth/ForgetPassword";

import { OTP } from "./components/Auth/OTP";

import ResetPassword from "./components/Auth/ResetPassword";
import GoogleMap from "./components/Property/PropertyList/GoogleMap";
import OtpRegister from "./components/Auth/OtpRegister";
import Dashboard from "./components/Dashboard/Dashboard";
import ProfileScreen from "./components/Dashboard/screens/ProfileScreen/ProfileScreen";
import ViewRequest from "./components/Dashboard/ViewRequest";
import Accountsettings from "./components/Dashboard/AccountSettings/Accountsettings";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/otpcode' element={<OTP/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/renterdashboard" element={<RenterBoard/>}/>
        <Route path="view-request/" element={<ViewRequest/>}/>
        <Route path="/house" element={<IndexPage/>}/>
        <Route path="/propertylist/:propertyId" element={<ViewProperty/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/userprofile" element={<ProfileScreen/>}/>
        <Route path="/change-password" element={<Accountsettings/>}/>
       
        <Route path='/otpregister' element={<OtpRegister/>}/>
       

       
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState} from "react";
import "./Registration.css";
import {useNavigate } from 'react-router-dom';
import { formValidate } from "../validate/formValidate";
//import Statusbar from '../assets/images/Statusbar.png';
function Registration() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
    setUserInfo({ name: "", email: "", password: "", password1:""});
  };
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password1:"",
  });
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  const navLogin = () => {
    navigate('/login');
  };
  return (
  <><div className='container'>
       <h1 className="cls-Noto">Welcome Onboard!</h1>
       <h2 className="cls-Robo">Let's help you meet up your tasks.</h2>
       <form onSubmit={handleSubmit}>
        <input type="text"  style={{marginTop:63}}className="input-box" name="name" placeholder="Enter your full name"   onChange={handleChange} value={userInfo.name} minLength='5' maxLength='10' required/>
        <input type="email" className="input-box" name="email" placeholder="Enter your email"  onChange={handleChange} value={userInfo.email} required />
        <input type="password" className="input-box" id="pass10"name="password" value={userInfo.password}  onChange={handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Enter Password" required/>
        <input type="password"  className="input-box" id="pass20" name="password1" onChange={handleChange}  value={userInfo.password1}placeholder="Confirm Password" required/>
        <input type="submit" className="btn01" value="Get Started" onClick={function(){formValidate(); navLogin()}} />
        <h4 className="cls-Robo" style={{fontSize:18}}>Already have an account? <input type="button" className="link" value="Login" onClick={navLogin}></input></h4>
      </form>
    </div></>
     );}
 export default Registration;
import React, { useState} from "react";
import {Container, ShapeEllipse, GetStartedButton,ViewStatusbar} from '../Splash/splash.styled';
import { TextWrap, Input, LoginLink, ClsNoto02} from "./Registration";
import {useNavigate } from 'react-router-dom';
import { formValidate } from "../validate/formValidate";
const Registration=()=> {
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
    <Container>
    <ShapeEllipse>
     <ViewStatusbar></ViewStatusbar>
     </ShapeEllipse>
       <ClsNoto02>Welcome Onboard!</ClsNoto02>
       <TextWrap>Let's help you meet up your tasks.</TextWrap>
       <form onSubmit={handleSubmit}>
        <Input type="text"  style={{marginTop:63}} name="name" placeholder="Enter your full name"   onChange={handleChange} value={userInfo.name} minLength='5' maxLength='10' required/>
        <Input type="email" name="email" placeholder="Enter your email"  onChange={handleChange} value={userInfo.email} required />
        <Input type="password" id="pass10"name="password" value={userInfo.password}  onChange={handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Enter Password" required/>
        <Input type="password"  id="pass20" name="password1" onChange={handleChange}  value={userInfo.password1}placeholder="Confirm Password" required/>
        <GetStartedButton onClick={formValidate}>Get Started</GetStartedButton>
        <TextWrap style={{fontSize:18}}>Already have an account?<LoginLink onClick={navLogin}>Login</LoginLink></TextWrap>
      </form>
    </Container>
     );}
 export default Registration;
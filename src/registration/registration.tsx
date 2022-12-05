import React, { useState} from "react";
import Shape from '../assets/images/Shape.png';
import Statusbar from '../assets/images/Statusbar.png';
import {Container, ShapeEllipse, GetStartedButton,ViewStatusbar} from '../splash/splash.styled';
import { TextWrap, Input, LoginLink, ClsNoto02} from './registration.styled';
import {useNavigate } from 'react-router-dom';
import { formValidate } from "../validate/formValidate";
import { RoboText } from "../login/Login.styled";

const Registration=()=> {

  const handleSubmit = () => {
    console.log(userInfo);
    setUserInfo({ name: "", email: "", password: "", password1:""});
  };
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password1:"",
  });
  const handleChange = () => {
    setUserInfo({ ...userInfo, });
  };
  const navigate = useNavigate();
  const navLogin = () => {
    navigate('/login');
  };
  return (
    <Container>
    <ShapeEllipse background={Shape}>
               <ViewStatusbar src={Statusbar}/>
               </ShapeEllipse>
       <ClsNoto02>Welcome Onboard!</ClsNoto02>
       <TextWrap>Let's help you meet up your tasks.</TextWrap>
       <form onSubmit={handleSubmit}>
        {/*<Input type="text"  style={{marginTop:63}} name="name" placeholder="Enter your full name"   onChange={(event)=>handleChange(event)}  value={userInfo.name} minLength='5' maxLength='10' required/>*/}
        <Input type="email" name="email" placeholder="Enter your email"  onChange={handleChange}value={userInfo.email} required />
        <Input type="password" id="pass10"name="password" value={userInfo.password}  onChange={handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Enter Password" required/>
        <Input type="password"  id="pass20" name="password1" onChange={handleChange} value={userInfo.password1}placeholder="Confirm Password" required/>
        <GetStartedButton onClick={formValidate}>Get Started</GetStartedButton>
        <RoboText>Already have an account?<LoginLink onClick={navLogin}>Login</LoginLink></RoboText>
      </form>
    </Container>
     );}
 export default Registration;
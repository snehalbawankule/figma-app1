import React, { useState} from "react";
import Shape from '../assets/images/Shape.png';
import Statusbar from '../assets/images/Statusbar.png';
import {Container, ShapeEllipse, GetStartedButton,ViewStatusbar} from '../splash/splash.styled';
import { TextWrap, Input, LoginLink, ClsNoto02} from './registration.styled';
import {useNavigate } from 'react-router-dom';
import { FormValidate } from "../validate/formValidate";
import { RoboText } from "../login/Login.styled";
interface RegistrationProps{
    name: string;
    email:  string;
    password: string;
    password1:string;
}
const Registration =()=> {
  const [userInfo, setUserInfo] =useState<Partial<RegistrationProps>>({});
  const handleSubmit = (e: React.FormEvent)=> {
    console.log(userInfo);
    setUserInfo({ name: "", email: "", password: "", password1:""});
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
        <Input type="text"  style={{marginTop:63}} name="name" placeholder="Enter your full name" onChange={e => setUserInfo({...userInfo, name: e.target.value })} minLength={5} maxLength={10} required/>
        <Input type="email" name="email" placeholder="Enter your email"  onChange={e => setUserInfo({...userInfo, email: e.target.value })} required />
        <Input type="password" id="pass10"name="password"  onChange={e => setUserInfo({...userInfo, password: e.target.value })} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Enter Password" required/>
        <Input type="password"  id="pass20" name="password1" onChange={e => setUserInfo({...userInfo, password1: e.target.value })}placeholder="Confirm Password" required/>
        <GetStartedButton onClick={FormValidate}>Get Started</GetStartedButton>
        <RoboText>Already have an account?<LoginLink onClick={navLogin}>Login</LoginLink></RoboText>
      </form>
    </Container>
     );}
 export default Registration;
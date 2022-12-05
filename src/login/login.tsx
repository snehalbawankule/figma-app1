import React from "react";
import Shape from '../assets/images/Shape.png';
import Statusbar from '../assets/images/Statusbar.png';
import Girl from '../assets/images/Girl.png';
import { useNavigate } from "react-router-dom";
import { validate } from '../validate/validate';
import {Container, ShapeEllipse, GetStartedButton,ViewStatusbar, NotoTextWrap} from '../splash/splash.styled';
import {GirlImage, ForgotLink, RoboText} from './Login.styled';
import { Input, LoginLink} from "../registration/registration.styled";
const Login =()=>{
  const navigate = useNavigate();
  const navHome = () => {
    navigate('/home');
     };
     const navForget = () => {
      navigate('/forget');
       };
     const navRegistration = () => {
      navigate('/registration');
       };
     return(
      <Container>
     <ShapeEllipse background={Shape}>
               <ViewStatusbar src={Statusbar}/>
               </ShapeEllipse>
           <NotoTextWrap style={{paddingTop:2}}>Welcome Back!</NotoTextWrap>
           <GirlImage src={Girl}/>
            <form onSubmit={navHome}>
              <Input type="password" id="pass1" style={{marginTop:52}} name="password" placeholder="Enter Password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
              <Input type="password" id="pass2" name="password" placeholder="Confirm Password" required/>
              <ForgotLink onClick={navForget}>Forgot your password</ForgotLink>
              <GetStartedButton  style={{marginTop:18}}onClick={validate}>Get Started</GetStartedButton>
              <RoboText>Don't have an account? <LoginLink onClick={navRegistration}>Register</LoginLink></RoboText>
            </form>
          </Container>
     );
    }
      export default Login;
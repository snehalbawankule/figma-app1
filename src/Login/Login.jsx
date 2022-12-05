import React from "react";
import { useNavigate } from "react-router-dom";
import { validate } from '../validate/validate';
import {Container, ShapeEllipse, GetStartedButton,ViewStatusbar, NotoTextWrap} from '../Splash/splash.styled';
import {GirlImage, ForgotLink} from './Login';
import { Input } from "../Registration/Registration";
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
      <ShapeEllipse>
       <ViewStatusbar></ViewStatusbar>
       </ShapeEllipse>
           <NotoTextWrap style={{paddingTop:26}}>Welcome Back!</NotoTextWrap>
           <GirlImage/>
            <form onSubmit={navHome}>
              <Input type="password" id="pass1" style={{marginTop:52}} name="password" placeholder="Enter Password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
              <Input type="password" id="pass2" name="password" placeholder="Confirm Password" required/>
              <ForgotLink onClick={navForget}>Forgot your password</ForgotLink>
              <GetStartedButton onClick={validate}>Get Started</GetStartedButton>
              <h4 className="cls-Robo" style={{fontSize:18}} >Don't have an account? <input type="button" className="link" value="Register" onClick={navRegistration}></input></h4>
            </form>
          </Container>
     );
    }
      export default Login;
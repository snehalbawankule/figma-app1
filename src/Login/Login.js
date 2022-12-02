import React from "react";
import { useNavigate } from "react-router-dom";
import { validate } from '../validate/validate';
import './Login.css';
import girl from '../assets/images/girl.png';
import Statusbar from '../assets/images/Statusbar.png';
function Login (){
  const navigate = useNavigate();
  const navHome = () => {
    navigate('/home');
     };
     const navRegistration = () => {
      navigate('/registration');
       };
     return(
        <div className="container">
           <div className="shape">
             <img className="status-bar" src={Statusbar} alt='status' />
            </div>
           <h1 className="cls-Noto">Welcome Back!</h1>
           <img className="girl" src={girl} alt='girl' />
            <form onSubmit={navHome}>
              <input type="password" id="pass1" style={{marginTop:52}} className="input-box" name="password" placeholder="Enter Password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
              <input type="password" id="pass2" className="input-box" name="password" placeholder="Confirm Password" required/>
              <h2><a className="link" style={{paddingLeft:99}} href="/forgot.html">Forgot your password</a></h2>
              <input type="submit" style={{marginTop:10}} className="btn01" value="Get Started" onClick={validate}/>
              <h4 className="cls-Robo" style={{fontSize:18}} >Don't have an account? <input type="button" className="link" value="Register" onClick={navRegistration}></input></h4>
            </form>
          </div>
     );
    }
      export default Login;
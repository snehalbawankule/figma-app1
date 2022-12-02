import React from "react";
import './Home.css';
//import Checked from "../checked/checked";
import Checkbox001 from '../Checkbox/checkbox';
import profile from '../assets/images/profile.png';
import Statusbar from '../assets/images/Statusbar.png';
import clock from '../assets/images/clock.jpg';

function Home() {
  return (
      <>
      <div className="container">
         <div className="top">
             <img className="status-bar" src={Statusbar} alt='status' />
             <img className="profile" src={profile} alt='pic'/>
             <p className="cls-Noto" style={{color:"white", marginTop:5}}>Welcome Back Olivia</p>
         </div>
          <p className="cls-Noto" style={{marginTop:12}}>Good Afternoon</p>
          <img id="clock" src={clock} alt='clock' />
           <div>
             <p className="cls-Robo" style={{color:"black", fontWeight:700, textAlign:"left", paddingLeft:10}}>Tasks list</p>
             <div className="box">
             <p className="cls-Robo1" >Daily Tasks</p>
              <Checkbox001/>
             </div>
           </div>
       </div>
    
      </>
     );
  }
  export default Home;
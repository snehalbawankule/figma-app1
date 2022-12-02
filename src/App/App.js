import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
//import { Component } from 'react';
import Splash from '../Splash/Splash.jsx';
import Registration from '../Registration/Registration';
import Home from '../Home/Home';
import Login from '../Login/Login';
class App extends Component{
render(){
  return(
    
    <div>
         
          <Routes>
          <Route path='/' element={<Splash/>} />
          <Route path='/Registration' element={<Registration/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
         </Routes>
         </div>
 
 
  )
}
  
};
export default App;
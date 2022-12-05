import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import Splash from '../Splash/splash';
import Registration from '../Registration/Registration.jsx';
import Home from '../Home/Home';
import Login from '../Login/Login.jsx';
class App extends Component{
render(){
  return(
          <Routes>
          <Route path='/' element={<Splash/>} />
          <Route path='/Registration' element={<Registration/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
         </Routes>
  )} 
};
export default App;
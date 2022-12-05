import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import Splash from '../splash/splash';
import Registration from '../registration/registration';
import Home from '../home/home';
import Login from '../login/login';
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
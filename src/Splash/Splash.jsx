import React from "react";
import {Container, ShapeEllipse, ClsNoto01, StyledButton, ClsRobo,ViewStatusbar, ViewBoy} from './style.js';
import { useNavigate } from "react-router";
//import Statusbar from '../assets/images/Statusbar.png';
//import boy from '../assets/images/boy.png';
//import shape from '../assets/images/shape.png';
const Splash =({ ...props })=> {
  const navigate = useNavigate();
  const navRegistration = () => {
  navigate('/Registration');
  };
    return (  
            <Container>
              <ShapeEllipse>
               <ViewStatusbar></ViewStatusbar>
               </ShapeEllipse>
               <ViewBoy></ViewBoy>
          <ClsNoto01 >Get things done with todo</ClsNoto01>
          <ClsRobo>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi ipsum neque ut consquat.</ClsRobo>
          <StyledButton>Get Started</StyledButton>" onClick={navRegistration}
        </Container>
      );};
export default Splash;
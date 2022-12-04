import React from "react";
import {Container, ShapeEllipse, ClsNoto01, StyledButton, ClsRobo,ViewStatusbar, ViewBoy} from './splash';
import { useNavigate } from "react-router";
const Splash =()=> {
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
          <StyledButton onClick={navRegistration}>Get Started</StyledButton>
        </Container>
      );};
export default Splash;
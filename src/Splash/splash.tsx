import React from "react";
import Shape from '../assets/images/Shape.png';
import Statusbar from '../assets/images/Statusbar.png';
import Boy from '../assets/images/Boy.png';
import {Container, ShapeEllipse, NotoTextWrap, GetStartedButton, RoboTextWrap,ViewStatusbar, ViewBoy} from './splash.styled';
import { useNavigate } from "react-router";
const Splash =()=> {
  const navigate = useNavigate();
  const navRegistration = () => {
  navigate('/Registration');
  };
    return (  
            <Container>
              <ShapeEllipse background={Shape}>
               <ViewStatusbar src={Statusbar}/>
               </ShapeEllipse>
               <ViewBoy src={Boy}/>
          <NotoTextWrap>Get things done with todo</NotoTextWrap>
          <RoboTextWrap>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi ipsum neque ut consquat.</RoboTextWrap>
          <GetStartedButton onClick={navRegistration}>Get Started</GetStartedButton>
        </Container>
      );};
export default Splash;
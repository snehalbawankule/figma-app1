import styled from 'styled-components';
import Shape from '../assets/images/Shape.png';
import Statusbar from '../assets/images/Statusbar.png';
import Boy from '../assets/images/Boy.png';
const Container = styled.div`
position: relative;
width: 414px;
height: 896px;
background: #EAF2F2;ter;
  align-items: center;
`;

const ShapeEllipse= styled.div`
height: 195px;
width: 250px;
background-image: url(${Shape});
`;
const ViewStatusbar = styled.img`
 width: 414px;
height: 50px;
  margin-bottom: 54px;`;
  ViewStatusbar.defaultProps = {
    src: Statusbar,
  };
  const ViewBoy= styled.img`
  margin-left: 98px;
margin-top: 28px;`;
ViewBoy.defaultProps = {
    src: Boy,
  };

const StyledButton = styled.button`
width: 321px;
height: 61px;
margin-top: 47px;
margin-left: 54px;
border: none;
font-family: 'Noto Sans SC';
font-size: 24px;
line-height: 35px;
text-align: center;
color: #FFFFFF;
background: #2ED2C9;
`;
  const ClsNoto01 = styled.h1`
  font-family: 'Noto Sans SC';
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #000000;
  padding-top : 67px;
  `;
const ClsRobo = styled.h3`
width : 284px;
height : 132px;
 padding-left:65px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 24px;
text-align: center;
color: rgba(117, 108, 108, 0.57);`;

export {Container, ShapeEllipse, StyledButton, ClsNoto01, ClsRobo, ViewStatusbar, ViewBoy };
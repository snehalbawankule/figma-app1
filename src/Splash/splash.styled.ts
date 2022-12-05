import styled from 'styled-components';
//const Shape= require("");
//const Shape = require("../assets/images/Shape.png").default;
//import Shape from '../assets/images/Shape.png';
// import Statusbar from '../assets/images/Statusbar.png';
// import Boy from '../assets/images/Boy.png';

type BannerProps = {
  background?: string;
  img?:string;
  src?:string;
};


const Container = styled.div`
position: relative;
width: 414px;
height: 896px;
background: #EAF2F2;ter;
  align-items: center;
`;

const ShapeEllipse= styled.div<BannerProps>`
height: 195px;
width: 250px;
background-image: url(${(props) => props.background});
`;
const ViewStatusbar = styled.img<BannerProps>`
 width: 414px;
height: 50px;
 `
  const ViewBoy= styled.img<BannerProps>`
  margin-left: 98px;
margin-top: 28px;`;


const GetStartedButton = styled.button`
width: 321px;
height: 61px;
margin-top: 47px;
margin-left: 54px;
border: none;
font-family: 'Noto Sans SC';
font-size: 24px;
color: #FFFFFF;
background: #2ED2C9;
`;
  const NotoTextWrap = styled.h1`
  font-family: 'Noto Sans SC';
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #000000;
  padding-top : 67px;
  `;
const RoboTextWrap = styled.h3`
width : 284px;
height : 132px;
 padding-left:65px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 24px;
text-align: center;
color: rgba(117, 108, 108, 0.57);`;

export {Container, ShapeEllipse, RoboTextWrap, GetStartedButton, NotoTextWrap, ViewStatusbar, ViewBoy };
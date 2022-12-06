import styled from 'styled-components';

const TextWrap = styled.h3`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 24px;
text-align: center;
color: rgba(117, 108, 108, 0.57);`;
const Input = styled.input`
width: 325px;
height: 68px;
border: none;
border-radius: 30px;
padding-left: 20px;
margin-left: 35px;
margin-top: 15px;
font-family: 'Noto Sans SC';
font-size: 18px;
::placeholder {
    color: black;
  }`;
  const Input1 = styled.input`
width: 325px;
height: 68px;
border: none;
border-radius: 30px;
padding-left: 20px;
margin-left: 35px;
margin-top: 63px;
font-family: 'Noto Sans SC';
font-size: 18px;
::placeholder {
    color: black;
  }`;
  const LoginLink =styled.button`
  font-family: 'Roboto', sans-serif;
  color: #2ED2C9;
  border: none;
  
  font-size: 22px;`;

  const ClsNoto02 = styled.h1`
  font-family: 'Noto Sans SC';
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #000000;
  margin-top : 37px;
  `;

export {TextWrap, Input, LoginLink, ClsNoto02, Input1};
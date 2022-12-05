import styled from 'styled-components';

type LoginProps = {
  src?:string;
};

  const GirlImage= styled.img<LoginProps>`
  margin-left: 80px;
  margin-top:26px`;

  const ForgotLink =styled.button`
  font-family: 'Roboto', sans-serif;
  color: #2ED2C9;
  border: none;
  padding-left:96px;
  margin-top:16px;
  font-size: 22px;`;

  const RoboText= styled.h3`
font-family: 'Roboto',sans-serif;
font-weight: 400;
font-size: 18px;
text-align: center;
color: rgba(49, 44, 44, 0.57);`
export{GirlImage, ForgotLink, RoboText};
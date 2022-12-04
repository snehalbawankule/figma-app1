import styled from 'styled-components';
import Girl from '../assets/images/Girl.png';
  const GirlImage= styled.img`
  margin-left: 80px;
  margin-top:26px`;
GirlImage.defaultProps = {
    src: Girl,
  };
  const ForgotLink =styled.a`
  font-family: 'Roboto', sans-serif;
  color: #2ED2C9;
  border: none;
  text-align:center;
  margin-top:16px;
  font-size: 22px;`;
export{GirlImage, ForgotLink};
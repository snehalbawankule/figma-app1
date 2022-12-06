import styled from 'styled-components';
const CheckBoxes =styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;`

const CheckBox=styled.div`
`
const TestInput=styled.input`
font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding-left: 10px;
  color: #5B716F;`
const Input= styled.div`
margin-left: 50px;
appearance: none;
width: 20px;
height: 15px;
outline:0.2em solid black;`;
const Label =styled.label`
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
padding-left: 10px;
color: #5B716F;`
export{CheckBoxes,CheckBox,Input,Label, TestInput};
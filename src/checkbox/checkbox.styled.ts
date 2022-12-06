import styled from 'styled-components';
const CheckBoxes =styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;`

const CheckBox=styled.div`
`
const Input= styled.div`
margin-left: 50px;
appearance: none;
width: 20px;
height: 20px;
outline:0.2em solid black;
checked{
  background:#2ED2C9;
}`;
const Label =styled.label`
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
text-align:center;
padding-left: 15px;
color: #5B716F;
`;


export{CheckBoxes,CheckBox,Input,Label};
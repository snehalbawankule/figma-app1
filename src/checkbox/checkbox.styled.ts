import styled from 'styled-components';
const CheckBoxes =styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;`
const CheckBox=styled.div`
`
const Input = styled.input.attrs({ 
  type: 'checkbox',
  value:'id'
})`
margin-left: 50px;
width: 20px;
height: 20px;
outline:0.2em solid black;
checked{
  background:#2ED2C9;
}`;
const Label =styled.label.attrs({ 
  type: 'text',
  value:'title'
})`
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
padding-left: 15px;
color: #5B716F;
`;
export{CheckBoxes,CheckBox,Input,Label};
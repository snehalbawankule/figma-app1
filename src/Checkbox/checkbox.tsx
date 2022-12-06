import { useState, useEffect} from 'react';
import React from 'react';
import {Input, CheckBox, CheckBoxes,Label} from './checkbox.styled';
const Checkbox1  =()=>{
  const [todo, setTodo] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => setTodo(json))
    .catch(error => console.log(error))
   },[todo])

    const handleSubmit = (e: React.FormEvent)=> {
    //const checked=e.target.checked;
    console.log({ id:'', title: '' }); 
  }
return (
    <CheckBox>
        {todo.map(({id, title}, index)=> {
          return <CheckBoxes key={index} onChange={(e)=>handleSubmit(e)} >
          <Input/>
           <Label className='checkbox-label' htmlFor="check-box" >{title}</Label>
          </CheckBoxes>})}
      </CheckBox>
       
)
        };


  export default Checkbox1; 
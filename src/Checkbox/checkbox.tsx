import React,  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../store/reducer';
import './checkbox.css';
import {Input, CheckBox, CheckBoxes,Label} from './checkbox.styled';
 const Checkbox1=()=>{
  const dispatch=useDispatch();
  const [todo, setTodo] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => setTodo(json))
    .catch(error => console.log(error))
   },[todo])
    
   const changeHandler=(e:any, id:number,title:string)=>{
    const newTodo={id:id, title:title, completed: isChecked}
    dispatch(addTodo(newTodo))
   }
   const [isChecked, setIsChecked] = useState(true); 
   const handleChange=()=>{
        setIsChecked(!isChecked);
     }
return (
  <CheckBox>
  {todo.map(({id, title})=> {
    return <CheckBoxes key={id} onClick={(e)=>changeHandler(e, id, title)}>
    <Input id='check-box' onClick={handleChange}/>
     <Label className='checkbox-label' htmlFor="check-box" >{title}</Label>
    </CheckBoxes>})}
</CheckBox>
)
 }; 

 
 export default Checkbox1;
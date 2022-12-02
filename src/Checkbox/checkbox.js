import { useState, useEffect} from 'react';
import '../Home/Home.css';
import './checkbox.css';
function Checkbox001  () {
  const [todo, setTodo] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => setTodo(json))
    .catch(error => console.log(error))
   },[todo])
  const handleSubmit=(e,id,title)=>{
    e.preventDefault();
    const checked=e.target.checked;
    console.log({ id:id, title: title, completed:checked }); 
  }
return (
      <>
        {todo.map(({id, title}, index)=> {
          return <div id='check-boxes' key={index} onChange={(e)=>handleSubmit(e,id,title)} >
          <span>  <input type="checkbox" id="check-box" value={id} /> </span>
            <label className='checkbox-label' htmlFor="check-box" value={title} >{title}</label><br />
          </div> })}
      </>
)};
  export default Checkbox001;
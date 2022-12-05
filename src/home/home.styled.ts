
import styled from 'styled-components';
type HomeProps = {
    background?:string;
  };
  const Top=styled.div`
  height: 359px;
  background: #77E0D1;
 `
 const ProfilePic= styled.img<HomeProps>`
 margin-left: 132px;
 margin-top:-53px;`
const ShapeEllipse=styled.div<HomeProps>`
height: 195px;
width:250px;
background-image: url(${(props) => props.background});
background-repeat: no-repeat;`
const Clock=styled.img<HomeProps>`
width: 175px;
height: 150px;
margin-left: 123px;`
const Box=styled.div`
overflow-y: scroll;
width: 368px;
height: 230px;
margin-top: 5px;
margin-left: 30px;
background: rgba(255, 255, 255, 0.76);
border-radius: 34px;`

const DailyTasks=styled.div`
font-family: Roboto, sans-serif;
font-weight: 700;
padding-left:30px;
padding-top:15px;
font-size: 18px;
margin-bottom:10px;
color: #494E4D;`
const TaskList=styled.div`
font-family:  Roboto, sans-serif;
font-weight: 700;
font-size: 24px;
padding-left:15px;
margin-top:32px;
color: #060606;`
export{ShapeEllipse,Top, ProfilePic,Clock, TaskList, DailyTasks, Box};
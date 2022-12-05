import React from "react";
import Shape from '../assets/images/shape1.png';
import Statusbar from '../assets/images/Statusbar.png';
import {Container,NotoTextWrap,ViewStatusbar,} from '../splash/splash.styled';
import Checkbox from '../checkbox/checkbox';
import {Top, ShapeEllipse,ProfilePic, Clock, TaskList,DailyTasks,Box} from './home.styled';
import profile from '../assets/images/profile.png';
import clock from '../assets/images/clock.jpg';
function Home() {
  return (
      <Container>
         <Top>
          <ShapeEllipse background={Shape}>
               <ViewStatusbar src={Statusbar}/>
          </ShapeEllipse>
             <ProfilePic src={profile}/>
             <NotoTextWrap style={{color:"white", paddingTop:0}}>Welcome Back Olivia</NotoTextWrap>
         </Top>
          <NotoTextWrap style={{paddingTop:12}}>Good Afternoon</NotoTextWrap>
          <Clock src={clock}/>
             <TaskList>Tasks list</TaskList>
             <Box>
             <DailyTasks>Daily Tasks</DailyTasks>
              <Checkbox/>
             </Box>
       </Container>
     );
  }
  export default Home;
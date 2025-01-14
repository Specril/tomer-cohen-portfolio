import React from 'react';
import ProjectBox from './ProjectBox';
import HockeyImage from '../images/GoalNetLaptop.png'
import DeadLiftImage from '../images/DeadLiftLaptop.png'
import VFImage from '../images/VFLaptop.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={HockeyImage} projectName="GoalNet" projectGithub={true} projectDemo={false} projectTitle={"Goal-Net: Israeli Hockey Website"}/>
        <ProjectBox projectPhoto={DeadLiftImage} projectName="DeadLift" projectGithub={true} projectDemo={true} projectTitle={"Dead Lift"}/>
        <ProjectBox projectPhoto={VFImage} projectName="VF" projectGithub={true} projectDemo={true} projectTitle={"Verbal Fluency NLP Study"}/>
      </div>

    </div>
  )
}

export default Projects
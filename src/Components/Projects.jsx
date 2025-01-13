import React from 'react';
import ProjectBox from './ProjectBox';
import HockeyImage from '../images/GoalNetLaptop.png'
import DeadLiftImage from '../images/DeadLiftLaptop.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={HockeyImage} projectName="GoalNet" />
        <ProjectBox projectPhoto={DeadLiftImage} projectName="DeadLift" />
      </div>

    </div>
  )
}

export default Projects
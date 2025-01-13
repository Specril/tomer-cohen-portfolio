import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {

    GoalNetDesc:"A comprehensive web application for managing players, matches, and administrative tasks in the Israeli Hockey League. The platform includes scheduling tools, match tracking, league statistics, and detailed profiles for players and teams. Built with Next.js, React, Node.js, and SQL",
    GoalNetGithub:"https://github.com/Specril/Israeli-Hockey-League-Web-Application",

    DeadLiftDesc:"Created during Global Game Jam 2024, Dead Lift is a fast-paced, two-player ragdoll game where players compete to climb as high as possible against the clock. Built from scratch in just 48 hours using Unity and won 2nd place at the competition.",
    DeadLiftGithub:"https://github.com/dendefo/Dead-Lift",
    DeadLiftWebsite:"https://globalgamejam.org/games/2024/dead-lift-4"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
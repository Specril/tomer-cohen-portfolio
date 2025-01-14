import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";
import pdf from "/Verbal_Fluency_Project_Paper.pdf"


const ProjectBox = ({ projectPhoto, projectName, projectTitle, projectGithub, projectDemo }) => {
  const desc = {
    GoalNetDesc: "A comprehensive web application for managing players, matches, and administrative tasks in the Israeli Hockey League. The platform includes scheduling tools, match tracking, league statistics, and detailed profiles for players and teams. Built with Next.js, React, Node.js, and Azure SQL",
    GoalNetGithub: "https://github.com/Specril/Israeli-Hockey-League-Web-Application",
    DeadLiftDesc: "Created during Global Game Jam 2024, Dead Lift is a fast-paced, two-player ragdoll game where players compete to climb as high as possible against the clock. Built from scratch in just 48 hours using Unity and won 2nd place at the competition.",
    DeadLiftGithub: "https://github.com/dendefo/Dead-Lift",
    DeadLiftWebsite: "https://globalgamejam.org/games/2024/dead-lift-4",
    VFDesc:"The study investigates the differences in verbal fluency performance between native (L1) and non-native (L2) Hebrew speakers, aiming to predict language nativeness and explore the topics generated during verbal fluency tasks. We utilized Python, R, logistic regression, support vector machines (SVM), random forest algorithms, and topic modeling techniques to analyze the data.",
    VFWebsite:pdf
  };

  const githubUrl = desc[projectName + 'Github'];
  const websiteUrl = desc[projectName + 'Website'];
  const description = desc[projectName + 'Desc'];

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectTitle}</h3>
        <br />
        <p>{description}</p>
        <br />
        {projectGithub && githubUrl && (
          <a href={githubUrl} target='_blank'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
        {projectDemo && websiteUrl && (
          <a href={websiteUrl} target='_blank' download="Verbal Fluency Project">
            <button className='projectbtn'><CgFileDocument /> Demo</button>
          </a>
        )}
      </div>
    </div>
  );
};


export default  ProjectBox
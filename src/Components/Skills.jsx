import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel, SiNextdotjs, SiPytorch, SiTensorflow, SiUnity  } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        NextJS: <SiNextdotjs/>,
        Python: <FaPython/>,
        SQL: <TbFileTypeSql/>,
        Pytorch: <SiPytorch/>,
        TensorFlow: <SiTensorflow/>,
        VSCode: <VscVscode/>,
        Unity: <SiUnity/>,

    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills

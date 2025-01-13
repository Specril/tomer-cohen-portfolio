import React from 'react';
import Lottie from  "lottie-react";
import laptop from "../LottieFiles/laptop.json";
import programmer from "../LottieFiles/programmer.json";
import Typed from "./Typed.jsx";
import Tilt from 'react-parallax-tilt';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hello, it's nice seeing you here today!</h1>
          <h1>I'M <b>TOMER COHEN</b></h1>
          <Typed/>   
        </div>
        <Lottie 
          className="illustration" 
          animationData={laptop} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>intro</b></h1>
          <p>
          I'm a Technion graduate with a deep passion for solving complex problems,
          blending <b>Data Science</b> and <b>Software Development</b> to create impactful solutions.<br /><br />
            I am fluent in <b>Python</b> and also know <b>Java</b>, <b>JavaScript</b>, <b>C++</b> and many more languages, tools and frameworks.<br/><br/>
            Whether I'm diving into a data set, building a full-stack project, or experimenting with game development,
            I always strive to learn something new.<br/><br/>
            Currently, I'm focusing on creating projects and looking for a <b>Junior Software Developer</b> role. 
            <br />
          </p>
        </div>
        <Tilt className='Avatar'>
        <Lottie 
          animationData={programmer} 
          loop={true} 
        />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
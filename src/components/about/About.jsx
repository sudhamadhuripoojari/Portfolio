import React from 'react';
import "../about/about.css";
import Pic from "../../img/Pic.jpg";

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
              <img src= {Pic} alt=""  className="a-img" />
          </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         Hey!! This is Sudha
        </p>
        <p className="a-desc">
        I am a curious Front-end developer student from HyperIsland looking to leverage 
        my knowledge and experience building responsive and scalable web apps to solve interesting problems 
        that delight end-users. 
        As a front-end developer student, I've emphasized the importance of scalable 
        and well-documented code. I enjoy working collaboratively but can also run with 
        projects on my own. I am comfortable working with JavaScript, React, HTML/CSS and Figma
        to deliver exceptional customer experience. Please visit my <a target="_blank" href="https://github.com/sudhamadhuripoojari"> GitHub </a> to see some of
        works!!  
        </p>
      </div>
    </div>
  )
}

export default About

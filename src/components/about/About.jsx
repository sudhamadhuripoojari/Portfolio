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
        I am an ambitious Java Full-stack developer with 2years of experience, 
        eager to apply my knowledge and expertise in building responsive and scalable web applications to tackle intriguing challenges that delight end-users. 

        Throughout my journey as a full stack developer, I have prioritized the significance of writing maintainable and well-documented code. Collaboration is essential to me, and I thrive in a team environment, but I am equally capable of taking ownership of projects independently. <br />
        <br />
        My skill set includes proficiency in Java, Spring framework, JavaScript, Typescript, React, Next js, Storybook, Figma, PostgreSQL, Mongodb, Azure.
        <br />
        You can explore some of my past projects on my <b><a target="_blank" href="https://github.com/sudhamadhuripoojari"> GitHub </a></b> repository.<br />
        <br />

        I am enthusiastic about continuous learning and staying up-to-date with the latest technologies and industry trends to deliver innovative solutions. Let's collaborate and create meaningful applications that make a positive impact.
        </p>
      </div>
    </div>   
  )
}

export default About

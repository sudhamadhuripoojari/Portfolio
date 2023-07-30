import React from 'react';
import './projectList.css'
import Project from '../project/Project';
import { projects } from '../../data';


const ProjectList = () => {
  return (
<div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Inspired & Created </h1>
        <p className="pl-desc">
          This is my portfolio displaying my works.
          Beautiful Webpages, stunning Designs using HTML, CSS, Javascript, React, MERN & fun game project using Phaser.
        </p>
      </div>
      <div className="pl-list">
      {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList

import React from 'react';
import Header from '../layout/Header/header';
import Heading from '../components/ProjectComponents/ProjectHeading/Heading';
import LiveProjects from '../components/ProjectComponents/LiveProjects/LiveProjects';

const Projects = () => {
    return (
      <div>
        <Header />
        <div className="projects-page page">
            <Heading/>
            <LiveProjects/>
        </div>
      </div>
    );
}

export default Projects;

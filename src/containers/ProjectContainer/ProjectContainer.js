import React from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectContainer = () => {

  return (
    <div>
      <div className='project-container'>
        <ProjectCard />
      </div>
      <button className='load-more standard-button'>Load More Projects</button>
    </div>
  )
}

export default ProjectContainer;
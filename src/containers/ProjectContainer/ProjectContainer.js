import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { connect } from 'react-redux';

export const ProjectContainer = (props) => {
  const projectCards = props.projects.map(project => {
    const projectPalettes = props.palettes.filter(palette => palette.project_id === project.id);
    return <ProjectCard projectTitle={project.name} palettes={projectPalettes} id={project.id} key={project.id}/>
  });

  return (
    <div>
      <div className='project-container'>
        { projectCards }
      </div>
      <button className='load-more standard-button'>Load More Projects</button>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes
});

export default connect(mapStateToProps)(ProjectContainer);
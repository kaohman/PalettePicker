import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { connect } from 'react-redux';

export const ProjectContainer = ({ error, searching, projects, palettes }) => {
  const sortItems = (items) => {
    let itemsCopy = items.slice();
    itemsCopy.sort((a, b) => {
      if (a.updated_at > b.updated_at) return -1;
      if (b.updated_at < a.updated_at) return 1;
      return 0;
    });
    return itemsCopy
  }

  const sortPalettes = (id) => {
    let projectPalettes = palettes.filter(palette => palette.project_id === id);
    return projectPalettes.length ? sortItems(projectPalettes) : []
  }

  const setProjectCards = () => {
    let projectsCopy = projects.slice();
    projectsCopy.forEach((project, i) => {
      const sortedPalettes = sortPalettes(project.id);
      if (sortedPalettes.length && sortedPalettes[0].updated_at > project.updated_at) {
        projectsCopy[i].updated_at = sortedPalettes[0].updated_at
      }
    });
    
    const sortedProjects = sortItems(projects);
    return sortedProjects.map(project => {
      const sortedPalettes = sortPalettes(project.id);
      return <ProjectCard projectTitle={project.name} palettes={sortedPalettes} id={project.id} key={project.id} />
    });
  }

  return (
    <div className='project-container'>
      { searching && error ? <div>No projects or palettes match that name</div> : setProjectCards() }
    </div>
  );
};

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes,
  searching: state.searching,
  error: state.error,
});

export default connect(mapStateToProps)(ProjectContainer);
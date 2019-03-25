import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { connect } from 'react-redux';

export const ProjectContainer = (props) => {
  const { searching, search, projects, palettes, loading, error } = props;
  let projectCards;

  if (searching && search.length) {
    projectCards = search.map(project => {
      const projectPalettes = palettes.filter(palette => palette.project_id === project.id);
      return <ProjectCard projectTitle={project.name} palettes={projectPalettes} id={project.id} key={project.id} />
    });
  } else if (searching) {
    return <div>No projects or palettes match that name</div>
  } else {
    projectCards = projects.map(project => {
      const projectPalettes = palettes.filter(palette => palette.project_id === project.id);
      return <ProjectCard projectTitle={project.name} palettes={projectPalettes} id={project.id} key={project.id} />
    });
  };

  return (
    <div className='project-container'>
      {projectCards}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes,
  searching: state.searching,
  search: state.search,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(ProjectContainer);
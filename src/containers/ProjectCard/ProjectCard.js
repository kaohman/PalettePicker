import React from 'react';
import { deleteProject } from '../../thunks/deleteProject';
import { connect } from 'react-redux';
import ProjectCardPalette from '../ProjectCardPalette/ProjectCardPalette';

export const ProjectCard = (props) => {
  const deleteCard = async (e) => {
    await props.deleteProject(parseInt(e.target.id));
  }

  const palettes = props.palettes.map(palette => {
    return <ProjectCardPalette {...palette} key={palette.id}/>
  });

  return (
    <div className='project-card'>
      <h3>{props.projectTitle}</h3>
      <button onClick={deleteCard} id={props.id} className='delete-project'></button>
      {palettes}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteProject: (id) => dispatch(deleteProject(id)),
});

export default connect(null, mapDispatchToProps)(ProjectCard);
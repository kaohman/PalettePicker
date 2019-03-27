import React from 'react';
import { deleteProject } from '../../thunks/deleteProject';
import { connect } from 'react-redux';
import ProjectCardPalette from '../ProjectCardPalette/ProjectCardPalette';
import PropTypes from 'prop-types';

export const ProjectCard = (props) => {
  const deleteCard = async (e) => {
    await props.deleteProject(parseInt(e.target.id));
  }

  const copyShareLink = () => {
    
  }

  const palettes = props.palettes.map(palette => {
    return <ProjectCardPalette {...palette} key={palette.id}/>
  });

  return (
    <div className='project-card'>
      <h3 className='project-title'>{props.projectTitle}</h3>
      <button onClick={copyShareLink} id={props.id} className='share-link'></button>
      <button onClick={deleteCard} id={props.id} className='delete-project'></button>
      {palettes}
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  deleteProject: (id) => dispatch(deleteProject(id)),
});

ProjectCard.propTypes = {
  deleteProject: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(ProjectCard);
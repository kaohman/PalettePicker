import React from 'react';
import { deleteProject } from '../../thunks/deleteProject';
import { connect } from 'react-redux';

export const ProjectCard = (props) => {
  const deleteCard = async (e) => {
    await props.deleteProject(parseInt(e.target.id));
  }

  const palettes = props.palettes.map(palette => {
    return <div className='card-palette'>
      <h4>{palette.name}</h4>
      <div style={{ backgroundColor: palette.color1 }} className='palette-color-div'></div>
      <div style={{ backgroundColor: palette.color2 }} className='palette-color-div'></div>
      <div style={{ backgroundColor: palette.color3 }} className='palette-color-div'></div>
      <div style={{ backgroundColor: palette.color4 }} className='palette-color-div'></div>
      <div style={{ backgroundColor: palette.color5 }} className='palette-color-div'></div>
    </div>
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
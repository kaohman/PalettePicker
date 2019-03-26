import React from 'react';
import { deletePalette } from '../../thunks/deletePalette';
import { connect } from 'react-redux';

export const ProjectCardPalette = ({ name, color1, color2, color3, color4, color5, id, deletePalette }) => {
  const deleteCardPalette = async (e) => {
    await deletePalette(parseInt(e.target.id));
  }

  return (
    <div className='card-palette'>
      <h4>{name}</h4>
      <div style={{ backgroundColor: color1 }} className='palette-color-div'></div>
      <div style={{ backgroundColor: color2 }} className='palette-color-div'></div>
      <div style={{ backgroundColor: color3 }} className='palette-color-div'></div>
      <div style={{ backgroundColor: color4 }} className='palette-color-div'></div>
      <div style={{ backgroundColor: color5 }} className='palette-color-div'></div>
      <button onClick={deleteCardPalette} id={id} className='delete-palette'></button>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  deletePalette: (id) => dispatch(deletePalette(id)),
});

export default connect(null, mapDispatchToProps)(ProjectCardPalette);
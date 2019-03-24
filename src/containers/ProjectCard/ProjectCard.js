import React from 'react';

export const ProjectCard = (props) => {
  
    const palettes = props.palettes.map(palette => {
      return <div className='card-palette'>
        <span>{palette.name}</span>
        <div style={{ backgroundColor: palette.color1 }} className='palette-color-div'></div>
        <div style={{ backgroundColor: palette.color2 }} className='palette-color-div'></div>
        <div style={{ backgroundColor: palette.color3 }} className='palette-color-div'></div>
        <div style={{ backgroundColor: palette.color4 }} className='palette-color-div'></div>
        <div style={{ backgroundColor: palette.color5 }} className='palette-color-div'></div>
      </div>
    });

    return (
      <div className='project-card'>
        <h1>{props.projectTitle}</h1>
        {palettes}
      </div>
    )
  
}
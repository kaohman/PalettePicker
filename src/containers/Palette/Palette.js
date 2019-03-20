import React from 'react';
import { connect } from 'react-redux';

export const Palette = ({ currentPalette }) => {
  return(
    <div>
      <div className='palette-div'>
        {/* {
          Object.keys(currentPalette).map(item => <div className={`color-div ${currentPalette[item].color}`}></div>)
        } */}
        <div className='color-div'>
          <button className='unlock-button'></button>
          <h4>#FFFFFF</h4>
        </div>
        <div className='color-div'>
          <button className='unlock-button'></button>
          <h4>#FFFFFF</h4>
        </div>
        <div className='color-div'>
          <button className='unlock-button'></button>
          <h4>#FFFFFF</h4>
        </div>
        <div className='color-div'>
          <button className='unlock-button'></button>
          <h4>#FFFFFF</h4>
        </div>
        <div className='color-div'>
          <button className='unlock-button'></button>
          <h4>#FFFFFF</h4>
        </div>
      </div>
      <button className='generate-button standard-button'>Generate Palette</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette,
});

export default connect(mapStateToProps)(Palette);
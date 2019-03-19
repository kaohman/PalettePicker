import React from 'react';
import { connect } from 'react-redux';

export const Palette = ({ currentPalette }) => {
  return(
    <div>
      <div className='palette-div'>
        {/* {
          Object.keys(currentPalette).map(item => <div className={`color-div ${currentPalette[item].color}`}></div>)
        } */}
        <div className='color-div'></div>
        <div className='color-div'></div>
        <div className='color-div'></div>
        <div className='color-div'></div>
        <div className='color-div'></div>
      </div>
      <button>Generate Palette</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette,
});

export default connect(mapStateToProps)(Palette);
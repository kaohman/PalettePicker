import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    }
  }
  
  setRandomColors = (id) => {
    let colors = [];
    for (let i = 0; i < 5; i++) {
      const color = `#${Math.random().toString(16).slice(2, 8)}`;
      colors.push(color);
    }
    this.setState({
      colors
    })
  }

  componentDidMount = () => {
    this.setRandomColors();
  }

  render() {
    const { colors } = this.state;
    return(
      <div>
        <div className='palette-div'>
          {
            colors.map(color => {
              return(
                <div style={{ backgroundColor: color }} className='color-div'>
                  <button className='unlock-button'></button>
                  <h4>{color}</h4>
                </div>
              )
            })
          }
        </div>
        <button className='generate-button standard-button'>Generate Palette</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette,
});

export default connect(mapStateToProps)(Palette);
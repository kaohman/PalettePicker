import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      locked: []
    }
  }
  
  setRandomColors = () => {
    const { colors, locked } = this.state;
    let newColors = [];
    for (let i = 0; i < 5; i++) {
      const color = locked.includes(i.toString()) ? colors[i] : `#${Math.random().toString(16).slice(2, 8)}`;
      newColors.push(color.toUpperCase());
    }
    this.setState({
      colors: newColors
    })
  }

  toggleLock = (e) => {
    const { locked } = this.state;
    const id = e.target.id;
    const newLocked = locked.includes(id) ? locked.filter(lockedId => lockedId !== id) : [...locked, id];
    this.setState({ locked: newLocked });
  }

  componentDidMount = () => {
    this.setRandomColors();
  }

  render() {
    const { colors, locked } = this.state;
    return(
      <div>
        <div className='palette-div'>
          {
            colors.map((color, i) => {
              return(
                <div style={{ backgroundColor: color }} className='color-div'>
                  <button 
                    onClick={this.toggleLock}
                    className={locked.includes(i.toString()) ? 'lock lock-button' : 'unlock lock-button'}
                    id={i}
                  >
                  </button>
                  <h4>{color}</h4>
                </div>
              )
            })
          }
        </div>
        <button onClick={this.setRandomColors} className='generate-button standard-button'>Generate Palette</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPalette: state.currentPalette,
});

export default connect(mapStateToProps)(Palette);
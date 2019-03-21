import React, { Component } from 'react';

export class ControlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='form-div'>
        <div className='new-project-div'>
          <label>Create New Project:
            <input placeholder='Add project name'></input>
          </label>
          <button className='standard-button'>Save Project</button>
        </div>
        <div className='save-palette-div'>
          <select>
            <option></option>
          </select>
          <input placeholder='Add palette name'></input>
          <button className='standard-button'>Save Palette</button>
        </div>
      </div>
    )
  }
}

export default ControlForm;
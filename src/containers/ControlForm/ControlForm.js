import React, { Component } from 'react';

export class ControlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>
          <select>
            <option></option>
          </select>
          <input placeholder='Add palette name'></input>
          <button>Save Palette</button>
        </div>
        <div>
          <label>Create New Project:
            <input placeholder='Add project name'></input>
          </label>
          <button>Save Project</button>
        </div>
      </div>
    )
  }
}
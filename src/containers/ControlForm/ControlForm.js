import React, { Component } from 'react';
import { connect } from 'react-redux';
import {postProject} from '../../thunks/postProject';

export class ControlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: '',
      palette: ''
    }
  }

  saveProject = () => {
    this.props.postProject(this.state.project)
  }

  handleChange = (e) => {
    const { value, id } = e.target;
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div className='form-div'>
        <div className='new-project-div'>
          <label>Create New Project:
            <input onChange={this.handleChange} value={this.state.project} id='project' placeholder='Add project name'></input>
          </label>
          <button onClick={this.saveProject} className='standard-button'>Save Project</button>
        </div>
        <div className='save-palette-div'>
          <select>
            <option></option>
          </select>
          <input onChange={this.handleChange} value={this.state.palette} id='palette' placeholder='Add palette name'></input>
          <button className='standard-button'>Save Palette</button>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  postProject: (project) => dispatch(postProject(project)),
});

export default connect(null, mapDispatchToProps)(ControlForm);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postProject } from '../../thunks/postProject';
import { postPalette } from '../../thunks/postPalette';
import { setError } from '../../actions';
import PropTypes from 'prop-types';

export class ControlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: '', 
      project: '',
      palette: ''
    };
  };

  saveProject = async () => {
    const { setError, postProject } = this.props;
    setError('');
    const id = await postProject(this.state.project);
    this.setState({ selectedProject: id.toString() });
    this.clearInput('project');
  }

  savePalette = async () => {
    const { setError, postPalette, currentPalette } = this.props;
    const { palette, selectedProject } = this.state;
    setError('');
    await postPalette({
      name: palette,
      color1: currentPalette[0],
      color2: currentPalette[1],
      color3: currentPalette[2],
      color4: currentPalette[3],
      color5: currentPalette[4],
      project_id: parseInt(selectedProject)
    });
    this.clearInput('palette');
  }

  clearInput = (name) => {
    !this.props.error && this.setState({ [name]: '' })
  };

  handleChange = (e) => {
    const { value, id } = e.target;
    this.setState({
      [id]: value
    });
  };

  changeSelectedProject = (e) => {
    this.setState({ selectedProject: e.target.value });
  };

  render() {
    const { error, projects } = this.props;
    const { project, palette, selectedProject } = this.state;
    return (
      <div className='form-div'>
        <div className='new-project-div'>
          <label>Create New Project:
            <input onChange={this.handleChange} value={project} id='project' placeholder='Add project name'></input>
          </label>
          <button onClick={this.saveProject} className='standard-button'>Save Project</button>
        </div>
        <div className='save-palette-div'>
          <select onChange={this.changeSelectedProject} value={selectedProject}>
            <option value=''>Choose a project</option>
            {
              projects.map(project => {
                return(<option value={project.id} key={project.id}>{project.name}</option>)
              })
            }
          </select>
          <input onChange={this.handleChange} value={palette} id='palette' placeholder='Add palette name'></input>
          <button onClick={this.savePalette} className='standard-button' disabled={selectedProject.length ? false : true}>Save Palette</button>
        </div>
        <p>{error}</p>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  error: state.error,
  currentPalette: state.currentPalette,
  projects: state.projects,
});

export const mapDispatchToProps = (dispatch) => ({
  postProject: (project) => dispatch(postProject(project)),
  setError: (error) => dispatch(setError(error)),
  postPalette: (palette) => dispatch(postPalette(palette)),
});

ControlForm.propTypes = {
  error: PropTypes.string,
  currentPalette: PropTypes.array,
  projects: PropTypes.array,
  postProject: PropTypes.func,
  setError: PropTypes.func,
  postPalette: PropTypes.func,
};

ControlForm.defaultProps = {
  error: '',
  currentPalette: [],
  projects: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlForm);
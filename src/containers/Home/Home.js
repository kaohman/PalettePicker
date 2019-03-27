import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../Palette/Palette';
import ControlForm from '../ControlForm/ControlForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { fetchProjects } from '../../thunks/fetchProjects';
import PropTypes from 'prop-types';

export class Home extends Component {
  
  componentDidMount = () => {
    this.props.fetchProjects();
  };

  render() {
    const { searching } = this.props;
    return (
      <div>
        {!searching && <Palette />}
        {!searching && <ControlForm />}
        <ProjectContainer />
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  projects: state.projects,
  searching: state.searching,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

Home.propTypes = {
  projects: PropTypes.array,
  searching: PropTypes.bool,
  fetchProjects: PropTypes.func,
}

Home.defaultProps = {
  projects: [],
  searching: false,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
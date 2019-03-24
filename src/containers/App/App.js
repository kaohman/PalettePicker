import React, { Component } from 'react';
import Header from '../Header/Header';
import Palette from '../Palette/Palette';
import ControlForm from '../ControlForm/ControlForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import '../../main.scss';
import { connect } from 'react-redux';
import { fetchProjects } from '../../thunks/fetchProjects';

export class App extends Component {

  componentDidMount = () => {
    this.props.fetchProjects();
  };

  render() {
    const { searching } = this.props;
    return (
      <div>
        <Header />
        {!searching && <Palette />}
        {!searching && <ControlForm />}
        <ProjectContainer />
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  searching: state.searching,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

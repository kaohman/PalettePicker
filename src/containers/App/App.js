import React, { Component } from 'react';
import Header from '../Header/Header';
import Palette from '../Palette/Palette';
import ControlForm from '../ControlForm/ControlForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import '../../main.scss';
import { connect } from 'react-redux';

export class App extends Component {

  componentDidMount = () => {
    this.fetchProjects()
  };

  render() {
    return (
      <div>
        <Header />
        <Palette />
        <ControlForm />
        <ProjectContainer />
      </div>
    );
  }
}

mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
})

export default connect(null, mapDispatchToProps)(App);

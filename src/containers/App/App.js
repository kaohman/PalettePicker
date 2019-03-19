import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Palette } from '../Palette/Palette';
import { ControlForm } from '../ControlForm/ControlForm';
import { ProjectContainer } from '../ProjectContainer/ProjectContainer';
import '../../main.scss'

export class App extends Component {
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

export default App;

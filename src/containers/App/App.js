import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import '../../main.scss';
import Share from '../Share/Share';
import Home from '../Home/Home';
import NotFound from '../../components/NotFound/NotFound';

export class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/project/:id' render={({ match }) => {
            const { id } = match.params;
            return <Share isProject={true} id={id} />
          }}
          />
          <Route path='/palette/:id' render={({ match }) => {
            const { id } = match.params;
            return <Share isProject={false} id={id} />
          }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  };
};

export default withRouter(App);

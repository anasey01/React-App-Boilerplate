import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/Home/Home';
import ConnectedTest from '../components/Test/Test';

export const RouteList = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/test" component={ConnectedTest} />
    </Switch>
  </React.Fragment>
);

export const Routes = () => (
  <Router>
    <RouteList />
  </Router>
);

export default Routes;

import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Demo from './screens/Demo.jsx'
import Home from './screens/Home.jsx'


const RouterApp = () => (
  <Router>
    <div>
      <Route path="/demo" component={Demo} />
      <Route path="/" component={Home} />
    </div>
  </Router>
);

export default RouterApp;
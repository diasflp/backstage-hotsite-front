import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Content from './routes/Routes';
import history from './History';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Content />
        </Router>
      </React.Fragment>
    );
  }
}

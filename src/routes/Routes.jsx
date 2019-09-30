import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Home from '../components/Home/Home';

export default class Routes extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth="xl">
        <Route path="/" component={Home} />
      </Container>
    );
  }
}

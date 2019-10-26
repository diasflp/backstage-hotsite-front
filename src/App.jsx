import React from 'react';
import { Router } from 'react-router-dom';
import Content from './routes/Routes';
import history from './History';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Content />
    </Router>
  );
};

export default App;

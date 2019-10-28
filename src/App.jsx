import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Content from './routes/Routes';
import history from './History';
import Header from './components/Header/Header';
import { theme } from './shared/theme.constants';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Header />
        <Content />
      </Router>
    </ThemeProvider>
  );
};

export default App;

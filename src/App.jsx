import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './shared/theme.constants';
import Content from './routes/Routes';
import history from './History';
import Header from './components/Header/Header';

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

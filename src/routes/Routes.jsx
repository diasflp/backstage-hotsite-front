import React from 'react';
import { Route } from 'react-router-dom';
import { StyledContainer } from '../styles/styled';
import Home from '../components/Home/Home';

const Routes = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Route path="/" component={Home} />
    </StyledContainer>
  );
};

export default Routes;

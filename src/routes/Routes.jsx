import React from 'react';
import { Route } from 'react-router-dom';
import { StyledContainer } from '../constants/styled.components';
import Home from '../components/Home/Home';

const Routes = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Route path="/" component={Home} />
    </StyledContainer>
  );
};

export default Routes;

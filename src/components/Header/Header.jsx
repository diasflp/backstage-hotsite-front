import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { StyledToolbar, Row } from '../../styles/styled';

const Header = () => {
  return (
    <AppBar>
      <StyledToolbar variant="dense">
        <div>icone</div>
        <Row button>
          <Typography variant="h6">Admin</Typography>
          <ArrowDropDownIcon />
        </Row>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;

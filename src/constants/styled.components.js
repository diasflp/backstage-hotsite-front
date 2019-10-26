import styled, { css } from 'styled-components';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

export const StyledContainer = styled(Container)`
  margin: 100px 0;
`;

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const Row = styled.div`
  flex-direction: row;
  box-sizing: border-box;
  display: flex;

  ${props =>
    props.button &&
    css`
      cursor: pointer;
    `}
`;

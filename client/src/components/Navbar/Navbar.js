import React from 'react';
// import { AppBar, Typography } from '@mui/material';
import memories from '../../images/memories.png';
import { StyledAppBar, StyledTypography, StyledImage, StyledBrandContainer } from './styles';

const Navbar = () => {
  return (
    <StyledAppBar position="static" color="inherit">
      <StyledBrandContainer>
        <StyledTypography variant="h2" align="center">Memories</StyledTypography>
        <StyledImage src={memories} alt="memories" height="60" />
      </StyledBrandContainer>
    </StyledAppBar>
  );
};

export default Navbar;

// At -2:29:30 in video 3
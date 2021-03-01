import React from 'react';

import { Link } from 'react-router-dom';

import GraphEcq from '@material-ui/icons/GraphicEq';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <GraphEcq fontsize="large" style={{ color: 'white' }} />
        </IconButton>

        <Typography edge="start" variant="subtitle1" color="inherit">
          Payment monitoring
        </Typography>
        <Button variant="outlined" color="inherit">
          Login
        </Button>
        <Button variant="outlined" color="inherit">
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

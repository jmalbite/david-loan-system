import React from 'react';

import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import { Menu, GraphicEq } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Payment Monitoring</Typography>
              </Grid>

              <Grid item>
                <IconButton>
                  <Menu fontSize="large" style={{ color: 'white' }} />
                </IconButton>
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <IconButton>
                    <GraphicEq fontSize="large" style={{ color: 'white' }} />
                  </IconButton>
                </Grid>

                <Grid item>
                  <Typography variant="h6">Payment Monitoring</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="outlined" color="inherit">
                    <Link
                      to="/login"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Login
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Link
                    to="/signup"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Button color="inherit">Sign up</Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

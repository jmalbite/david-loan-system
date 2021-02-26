import React from 'react';

import { Grid, Button, TextField, Paper, Typography } from '@material-ui/core';

const Signup = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item xs={10} sm={6} md={4} lg={4}>
        <form>
          <Paper style={{ padding: 20 }}>
            <Grid container direction="column" spacing="1">
              <Grid item xs sm>
                <Typography variant="h5" color="textPrimary">
                  SIGN UP
                </Typography>
              </Grid>

              <Grid item xs sm>
                <TextField
                  className="display-name"
                  variant="outlined"
                  type="text"
                  placeholder="Display name"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs sm>
                <TextField
                  className="email"
                  variant="outlined"
                  type="email"
                  placeholder="Email"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs sm>
                <TextField
                  className="password"
                  variant="outlined"
                  type="password"
                  placeholder="Password"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs sm>
                <TextField
                  className="confirm-password"
                  variant="outlined"
                  type="password"
                  placeholder="Confirm password"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs sm>
                <Button fullWidth variant="contained" color="primary">
                  Sign Up
                </Button>
              </Grid>

              <Grid item xs sm>
                <Button fullWidth variant="contained" color="secondary">
                  Sign Up with Google
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;

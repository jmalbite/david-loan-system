import React from 'react';
import { TextField, Button, Paper, Grid, Typography } from '@material-ui/core';

const Login = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: '40px' }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <form className="login-form">
          <Paper elevation={3} style={{ padding: 30 }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid container item justify="center" alignItems="center">
                <Typography variant="h5">LOGIN</Typography>
              </Grid>

              <Grid container direction="column" spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    name="email"
                    placeholder="email"
                    type="text"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    name="password"
                    placeholder="password"
                    type="password"
                    required
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" spacing={1}>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    name="login"
                    fullWidth
                    color="primary"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    name="login"
                    fullWidth
                    color="secondary"
                  >
                    Login with gmail
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;

import React from 'react';
import AnimateNumber from 'react-animated-number';

import { Grid, Paper, Typography } from '@material-ui/core';

const Dashboard = () => {
  return (
    <div
      className="dashboard"
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <Grid container direction="column" xs sm spacing={2}>
        <Grid item xs sm>
          <Paper
            elevation={2}
            style={{ padding: 20, backgroundColor: '#EDF4E0' }}
            square
          >
            <Grid container spacing={1}>
              <Grid item xs sm direction="column">
                <Typography variant="subtitle2" color="textPrimary">
                  Total Balance
                </Typography>
                <AnimateNumber
                  value={6900}
                  formatValue={(value) => `₱ ${value.toFixed(2)}`}
                  duration={400}
                  style={{ fontSize: 15, color: '#2f2fa1' }}
                />
              </Grid>

              <Grid item xs sm direction="column">
                <Typography variant="subtitle2" color="textPrimary">
                  Total Paid
                </Typography>
                <AnimateNumber
                  value={500}
                  formatValue={(value) => `₱ ${value.toFixed(2)}`}
                  duration={400}
                  style={{ fontSize: 15, color: '#5eda96' }}
                />
              </Grid>

              <Grid item xs sm direction="column">
                <Typography variant="subtitle2" color="textPrimary">
                  Total Obligation
                </Typography>
                <AnimateNumber
                  value={7400}
                  formatValue={(value) => `₱ ${value.toFixed(2)}`}
                  duration={400}
                  style={{ fontSize: 15, color: '#f64c71' }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item>
          <Typography variant="h6">PAYMENT HISTORY</Typography>
        </Grid>

        <Grid item xs sm>
          <Paper variant="outlined" elevation={3}>
            <Typography>yey</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

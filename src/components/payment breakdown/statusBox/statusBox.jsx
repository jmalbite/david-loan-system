import React from 'react';

import AnimatedNumber from 'react-animated-number';
import { Grid, Typography, Paper } from '@material-ui/core';

const StatusBox = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={5}>
        <Paper
          elevation={2}
          style={{ padding: 20, backgroundColor: '#EDF4E0' }}
          square
        >
          <Grid container spacing={1}>
            <Grid item xs sm>
              <Typography variant="subtitle2" color="textPrimary">
                Total Balance
              </Typography>
              <AnimatedNumber
                value={6900}
                formatValue={(value) => `₱ ${value.toFixed(2)}`}
                duration={400}
                style={{ fontSize: 15, color: '#2f2fa1' }}
              />
            </Grid>

            <Grid item xs sm>
              <Typography variant="subtitle2" color="textPrimary">
                Total Paid
              </Typography>
              <AnimatedNumber
                value={500}
                formatValue={(value) => `₱ ${value.toFixed(2)}`}
                duration={400}
                style={{ fontSize: 15, color: '#5eda96' }}
              />
            </Grid>

            <Grid item xs sm>
              <Typography variant="subtitle2" color="textPrimary">
                Total Obligation
              </Typography>
              <AnimatedNumber
                value={7400}
                formatValue={(value) => `₱ ${value.toFixed(2)}`}
                duration={400}
                style={{ fontSize: 15, color: '#f64c71' }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StatusBox;

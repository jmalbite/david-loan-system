import React from 'react';
import AnimateNumber from 'react-animated-number';
import moment from 'moment';

import { Grid, Paper, Typography } from '@material-ui/core';

const Dashboard = () => {
  var tempDate = new Date();
  return (
    <div
      className="dashboard"
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid container justify="center">
          <Grid item xs={11} sm>
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
                  <AnimateNumber
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
                  <AnimateNumber
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
        </Grid>

        <Grid item>
          <Typography variant="h6">PAYMENT HISTORY</Typography>
        </Grid>

        <Grid container justify="center">
          <Paper elevation={3} style={{ padding: 18 }}>
            <Grid container spacing={3}>
              <Grid item>
                <Typography>{moment(tempDate).format('LL')}</Typography>
              </Grid>

              <Grid item>
                <Typography variant="subtitle2">amount paid</Typography>
                <AnimateNumber
                  value={7400}
                  formatValue={(value) => `₱ ${value.toFixed(2)}`}
                  duration={400}
                  style={{ fontSize: 15, color: '#5eda96' }}
                />
              </Grid>

              <Grid item>
                <Typography variant="subtitle2">new balance</Typography>
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
      </Grid>
    </div>
  );
};

export default Dashboard;

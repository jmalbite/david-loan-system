import React from 'react';
import AnimatedNumber from 'react-animated-number';
import moment from 'moment';

import { Grid, Paper, Typography } from '@material-ui/core';

const Breakdowns = ({ paymentsHistory }) => {
  return (
    <>
      <Grid item>
        <Typography variant="h6">PAYMENT HISTORY</Typography>
      </Grid>

      {paymentsHistory.map((payment) => (
        <Grid container item xs={12} justify="center" key={payment.id}>
          <Paper elevation={3} style={{ padding: 18 }}>
            <Grid item container spacing={3}>
              <Grid item>
                <Typography>{moment(payment.date).format('LL')}</Typography>
              </Grid>

              <Grid item>
                <Typography variant="subtitle2">amount paid</Typography>
                <AnimatedNumber
                  value={payment.amountPaid}
                  formatValue={(value) => `₱ ${value.toFixed(2)}`}
                  duration={400}
                  style={{ fontSize: 15, color: '#5eda96' }}
                />
              </Grid>

              <Grid item>
                <Typography variant="subtitle2">new balance</Typography>
                <AnimatedNumber
                  value={payment.balance}
                  formatValue={(value) => `₱ ${value.toFixed(2)}`}
                  duration={400}
                  style={{ fontSize: 15, color: '#f64c71' }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default Breakdowns;

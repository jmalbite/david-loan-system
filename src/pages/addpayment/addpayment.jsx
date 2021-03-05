import React, { useState } from 'react';

import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';

const AddPayment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="add-payment" style={{ marginTop: 40 }}>
      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6}>
          <form>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Grid container direction="column" justify="center" spacing={1}>
                <Grid item>
                  <Typography variant="h6" gutterBottom>
                    Add Payment
                  </Typography>
                </Grid>

                <Grid container item justify="center" spacing={1}>
                  <Grid item xs={10} sm={8} md={8}>
                    <TextField
                      id="date"
                      label="Date of Payment"
                      type="date"
                      fullWidth
                      variant="outlined"
                      className="date-picker"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container item justify="center">
                  <Grid item xs={10} sm={8} md={8}>
                    <TextField
                      id="amount"
                      label="amount paid"
                      type="number"
                      fullWidth
                      variant="outlined"
                      className="amount-paid"
                    />
                  </Grid>
                </Grid>

                <Grid container item justify="center">
                  <Grid item xs={10} sm={8} md={8}>
                    <Button>ADD</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddPayment;

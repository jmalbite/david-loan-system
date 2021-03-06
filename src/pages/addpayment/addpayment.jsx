import React, { useState } from 'react';

import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addPayment } from '../../store/actions/paymentActions';

const AddPayment = ({ addPayment }) => {
  const tempDate = new Date();
  const [payment, setPayment] = useState({
    date: tempDate,
    amountToPay: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payment);
    addPayment(payment);
  };

  return (
    <div className="add-payment" style={{ marginTop: 40 }}>
      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6}>
          <Paper elevation={3} style={{ padding: 15 }}>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" justify="center" spacing={1}>
                <Grid item>
                  <Typography variant="h6" gutterBottom>
                    Add Payment
                  </Typography>
                </Grid>

                <Grid container item justify="center" spacing={1}>
                  <Grid item xs={10} sm={8} md={8}>
                    <TextField
                      name="date"
                      label="Date of Payment"
                      type="date"
                      fullWidth
                      variant="outlined"
                      className="date-picker"
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container item justify="center">
                  <Grid item xs={10} sm={8} md={8}>
                    <TextField
                      name="amountToPay"
                      label="Amount paid"
                      type="number"
                      fullWidth
                      variant="outlined"
                      className="amount-paid"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <Grid container justify="center" item spacing={1}>
                  <Grid item xs={10} sm={4} lg={4}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      color="primary"
                    >
                      ADD
                    </Button>
                  </Grid>

                  <Grid item xs={10} sm={4} lg={4}>
                    <Button variant="contained" fullWidth color="secondary">
                      CANCEL
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPayment: (payment) => dispatch(addPayment(payment)),
  };
};

export default connect(null, mapDispatchToProps)(AddPayment);

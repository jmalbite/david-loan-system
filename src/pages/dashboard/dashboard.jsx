import React from 'react';

import { Grid } from '@material-ui/core';

import StatusBox from '../../components/payment breakdown/statusBox/statusBox';
import Breakdown from '../../components/payment breakdown/breakdowns/breakdowns';

import { connect } from 'react-redux';

const Dashboard = (props) => {
  const { payments } = props;
  return (
    <div
      className="dashboard"
      style={{
        display: 'flex',
        justifyItems: 'center',
        marginTop: '30px',
      }}
    >
      <Grid container direction="column" spacing={2}>
        <StatusBox />
        <Breakdown paymentsHistory={payments} />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    payments: state.payment.payments,
  };
};

export default connect(mapStateToProps)(Dashboard);

import React from 'react';

import { Grid } from '@material-ui/core';

import StatusBox from '../../components/payment breakdown/statusBox/statusBox';
import Breakdown from '../../components/payment breakdown/breakdowns/breakdowns';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
      {console.log(payments)}
      <Grid container direction="column" spacing={2}>
        <StatusBox />
        <Breakdown paymentsHistory={payments} />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    //payments: state.payment.payments,
    payments: state.firestore.ordered.paymentHistory,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'paymentHistory' }])
)(Dashboard);

import React from 'react';

import { Grid } from '@material-ui/core';

import StatusBox from '../../components/payment breakdown/statusBox/statusBox';
import Breakdown from '../../components/payment breakdown/breakdowns/breakdowns';

import { connect } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
//import { compose } from 'redux';

const Dashboard = ({ payments }) => {
  useFirestoreConnect([{ collection: 'paymentHistory' }]);

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
        {payments ? <Breakdown paymentsHistory={payments} /> : 'Loading...'}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //payments: state.payment.payments,
    payments: state.firestore.ordered.paymentHistory,
  };
};

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: 'paymentHistory' }])
// )(Dashboard);

export default connect(mapStateToProps)(Dashboard);

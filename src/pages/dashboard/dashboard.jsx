import React, { useEffect } from 'react';

import { Grid } from '@material-ui/core';

import StatusBox from '../../components/payment breakdown/statusBox/statusBox';
import Breakdown from '../../components/payment breakdown/breakdowns/breakdowns';

import { connect } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { paymnetHistorytoState } from '../../store/actions/paymentActions';
//import { compose } from 'redux';

const Dashboard = ({ payments, moveData, paymentHistory }) => {
  useFirestoreConnect([{ collection: 'paymentHistory' }]);

  useEffect(() => {
    moveData(payments);
  }, [moveData, payments]);

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
        {paymentHistory ? (
          <Breakdown paymentsHistory={paymentHistory} />
        ) : (
          'Loading...'
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    paymentHistory: state.payment.payments,
    payments: state.firestore.ordered.paymentHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveData: (fbdata) => dispatch(paymnetHistorytoState(fbdata)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

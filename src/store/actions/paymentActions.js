//payment action
export const addPayment = (payment) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //thunk in index.js with parameters
    //async functions
    const firestore = getFirestore();
    firestore
      .collection('paymentHistory')
      .add({
        ...payment,
        amountPaid: parseInt(payment.amountPaid),
        date: payment.date,
        new_balance: 200,
      })
      .then(() => {
        dispatch({ type: 'ADD_PAYMENT', payment });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_PAYMENT_UNSUCCESSFUL', err });
      });
  };
};

export const paymnetHistorytoState = (fbdata) => {
  return {
    type: 'MOVE_DATA_TO_STATE',
    payload: fbdata,
  };
};

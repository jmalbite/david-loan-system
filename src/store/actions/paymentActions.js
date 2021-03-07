//payment action
export const addPayment = (payment) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //thunk in index.js with parameters
    //async functions
    const firestore = getFirestore();
    console.log('yey', getState);
    firestore
      .collection('paymentHistory')
      .add({
        ...payment,
        new_balance: 6000,
      })
      .then(() => {
        dispatch({ type: 'ADD_PAYMENT', payment });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_PAYMENT_UNSUCCESSFUL', err });
      });
  };
};

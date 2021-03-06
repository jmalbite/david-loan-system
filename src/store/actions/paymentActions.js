//payment action
export const addPayment = (payment) => {
  return (dispatch, getState) => {
    //async functions here

    dispatch({ type: 'ADD_PAYMENT', payment });
  };
};

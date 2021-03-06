const initState = {};

const paymentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PAYMENT':
      console.log('ADDED PAYMENT', action.payment);
  }
  return state;
};

export default paymentReducer;

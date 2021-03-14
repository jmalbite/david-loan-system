const initState = {};

const paymentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PAYMENT':
      console.log('ADDED PAYMENT', action.payment);
      return state;

    case 'ADD_PAYMENT_UNSUCCESSFUL':
      console.log('PAYMENT UNSUCCESSFUL');
      return state;

    default:
      console.log(state);
      return state;
  }
};

export default paymentReducer;

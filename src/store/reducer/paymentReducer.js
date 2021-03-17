const initState = {};

const paymentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PAYMENT':
      console.log('ADDED PAYMENT', action.payment);
      return state;

    case 'ADD_PAYMENT_UNSUCCESSFUL':
      console.log('PAYMENT UNSUCCESSFUL');
      return state;

    case 'MOVE_DATA_TO_STATE':
      return {
        ...state,
        payments: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;

const initState = {
  payments: [
    { id: '123', date: 'March 1, 2021', amountPaid: 550, balance: 300 },
    { id: '124', date: 'April 20, 2021', amountPaid: 700, balance: 7100 },
    { id: '125', date: 'May 30, 2021', amountPaid: 6800, balance: 78000 },
    { id: '126', date: 'June 27, 2021', amountPaid: 430, balance: 1500 },
  ],
};

const paymentReducer = (state = initState, action) => {
  return state;
};

export default paymentReducer;

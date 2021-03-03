import authReducer from './authReducer';
import paymentReducer from './paymentReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  payment: paymentReducer,
});

export default rootReducer;

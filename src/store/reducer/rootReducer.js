import authReducer from './authReducer';
import paymentReducer from './paymentReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  payment: paymentReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;

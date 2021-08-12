import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
//import contactReducers from '../reducer/contactReducers';
import {
  getFirebase,
  reduxReactFirebase,
  firebaseReducer,
} from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase from '../firebase/config';
import thunk from 'redux-thunk';
import contactReducers from '../reducer/contactReducers';

const reducer = combineReducers({
  contactState: contactReducers,
  firebaseState: firebaseReducer,
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default store;
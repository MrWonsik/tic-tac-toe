import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ticTacToe from './reducers';

const reducers = {
  ticTacToe,
};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(),
);

export default configureStore;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ticTacToe } from './tic-tac-toe/reducers';

const reducers = {
    ticTacToe
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => 
    createStore(
        rootReducer,
        composeWithDevTools()
    );
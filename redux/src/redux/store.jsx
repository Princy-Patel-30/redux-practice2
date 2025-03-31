import { createStore, combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  cart: reducer,
});

const store = createStore(rootReducer);

export default store;

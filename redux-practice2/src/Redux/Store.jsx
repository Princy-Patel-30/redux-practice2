import {createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import Data_reducer from './Data_reducer';

const store = createStore(Data_reducer,composeWithDevTools());

export default store;
import { createStore } from 'redux';
import rootReducer from '../redux_reducers';

export default function ConfigureStore(initialState) {

    return createStore(rootReducer, initialState);
}
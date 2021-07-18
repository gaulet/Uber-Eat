import { createStore } from 'redux';
import rootReducer from '../reducers';

const configueStore = (initialState = {}) => {
    return createStore(rootReducer, initialState,);
};

export default configueStore;
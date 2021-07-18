import { combineReducers } from 'redux';
import restaurant from './restaurant'
import category from './category'

const rootReducer = combineReducers({ restaurant: restaurant, category: category });

export default rootReducer;
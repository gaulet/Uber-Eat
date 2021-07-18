import { prop, find } from 'ramda';
import { createSelector } from 'reselect';

export const getMyList = prop('category');
export const getCategory = createSelector(getMyList);
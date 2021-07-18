import { prop, find, filter, slice } from 'ramda';
import { createSelector } from 'reselect';

export const getMyList = prop('restaurant');

export const getAllListe = createSelector(getMyList);

// export const getListe = (src) => createSelector(
//     getMyList,
    // (tab) => find((elem) => elem.src === src)(tab) !== undefined
// );

// export const getSearchPicture = (string) => createSelector(
//     getPicture,
//     (state) => {
//         if (string !== "") return filter((elem) => string === slice(0, string.length, elem.name), state)
//         return []
//     }
// )
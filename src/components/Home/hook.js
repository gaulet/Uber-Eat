import { useSelector } from 'react-redux';
import { getCategory } from '../../selectors/category';
import { getAllListe } from '../../selectors/restaurant';

export const useListe = () => ({
    restaurantData: useSelector(getAllListe()),
});

export const useCategory = () => ({
    categoryData: useSelector(getCategory()),
  });
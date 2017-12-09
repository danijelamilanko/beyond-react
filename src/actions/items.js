import { normalize } from 'normalizr';
import { ITEMS_FETCHED } from '../types';
import api from '../api';
import { itemSchema } from '../schemas';

// data.entities.items
const itemsFetched = data => ({
    type: ITEMS_FETCHED,
    data
});

export const fetchItems = () => dispatch => {
    console.log('fdsf');
    api.items
        .fetchAll()
        .then(items => dispatch(itemsFetched(normalize(items, [itemSchema]))));
};
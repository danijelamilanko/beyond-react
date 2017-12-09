import { createSelector } from 'reselect';
import { ITEMS_FETCHED } from "../types";

export default function items(state = {}, action = {}) {
    switch (action.type) {
        case ITEMS_FETCHED:
            return { ...state, ...action.data.entities.items };
        default:
            return state;
    }
}

// SELECTORS

export const itemsSelector = state => state.items;

export const allItemsSelector = createSelector(
    itemsSelector,
    itemsHash => Object.values(itemsHash)
);
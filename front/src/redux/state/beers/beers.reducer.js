import { BeerActionTypes } from "./beers.model";

const defaultBeersState = {
  items: [],
  newItems: [],
  loading: false
};
export const beersReducer = (state = defaultBeersState, action) => {
  switch (action.type) {
    case BeerActionTypes.BEERS_SET:
      return { ...state, items: action.beers };
    case BeerActionTypes.BEERS_FETCH:
      return { ...state, loading: true };
    case BeerActionTypes.BEERS_FETCH_SUCCESS:
    case BeerActionTypes.BEERS_FETCH_FAILURE:
      return { ...state, loading: false };
    case BeerActionTypes.BEERS_SET_NEW:
      return { ...state, newItems: [...state.newItems, action.beer] };
    case BeerActionTypes.BEERS_EDIT:
      const filter = (value) => value.uuid !== action.beer.uuid;
      const find = (value) => value.uuid === action.beer.uuid;

      // In both item arrays : If action.beer is present, remove old version and add new one, else keep the current array
      const f_items = state.items.find(find) ? [...state.items.filter(filter), action.beer] : state.items;
      const f_newItems = state.newItems.find(find) ? [...state.newItems.filter(filter), action.beer] : state.newItems;

      return { ...state, items: f_items, newItems: f_newItems };
    default:
      return state;
  }
};

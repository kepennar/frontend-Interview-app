import { BeerActionTypes } from "./beers.model";

const defaultBeersState = {
  items: [],
  loading: false,
};
export const beersReducer = (state = defaultBeersState, action) => {
  let updatedItems;
  let index;

  switch (action.type) {
    case BeerActionTypes.BEERS_SET:
      return { ...state, items: action.beers };

    case BeerActionTypes.BEERS_FETCH:
      return { ...state, loading: true };

    case BeerActionTypes.BEERS_FETCH_SUCCESS:
    case BeerActionTypes.BEERS_FETCH_FAILURE:
      return { ...state, loading: false };

    case BeerActionTypes.BEERS_SET_NEW:
      return { ...state, items: [...state.items, action.beer] };

    case BeerActionTypes.BEERS_UPDATE:
      updatedItems = [ ...state.items ];
      index = updatedItems.findIndex(item => item.uuid === action.beer.uuid);
      updatedItems[index] = action.beer;
      updatedItems[index].loading = true;
      return {
        ...state,
        items: updatedItems,
      };
    case BeerActionTypes.BEERS_UPDATE_SUCCESS:
      updatedItems = [ ...state.items ];
      index = updatedItems.findIndex(item => item.uuid === action.beerID);
      updatedItems[index].loading = false;
      return {
        ...state,
        items: updatedItems,
      };

    case BeerActionTypes.BEERS_DELETE:
      updatedItems = [ ...state.items ];
      index = updatedItems.findIndex(item => item.uuid === action.beer.uuid);
      updatedItems.splice(index, 1);
      return {
        ...state,
        items: updatedItems,
      };

    case BeerActionTypes.BEERS_DELETE_FAILURE:
      return { ...state, items: [...state.items, action.beer] };

    case BeerActionTypes.BEERS_SET_RATE:
      updatedItems = [ ...state.items ];
      index = updatedItems.findIndex(item => item.uuid === action.beer.uuid);
      updatedItems[index] = action.beer;

      return {
        ...state,
        items: updatedItems
      };

    default:
      return state;
  }
};

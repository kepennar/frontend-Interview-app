import { BeerActionTypes } from "./beers.model";

const defaultBeersState = {
  items: [],
  loading: false,
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
      return { ...state, items: [...state.items, action.beer] };

    /**
     * No change if success or failure. the score will not change.
     */
    // case BeerActionTypes.BEERS_RATE:
    // case BeerActionTypes.BEERS_RATE_SUCCESS:
    // case BeerActionTypes.BEERS_RATE_FAILURE:
    //   return { ...state };

    case BeerActionTypes.BEERS_SET_RATE:
      const updatedItems = [ ...state.items ];
      const beerIndex = updatedItems.findIndex(item => item.uuid === action.beer.uuid);
      updatedItems[beerIndex] = action.beer;

      return { ...state, items: updatedItems };

    default:
      return state;
  }
};

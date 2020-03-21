import { BeerActionTypes } from "./beers.model";

const defaultBeersState = {
  items: [],
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
    case BeerActionTypes.LOADING:
      return { ...state, loading: !state.loading };
    case BeerActionTypes.BEER_UPDATE_RATE:
      return {
        ...state,
        items: state.items.map(beer => {
          if (beer.uuid === action.beerId) {
            beer.score = action.score;
          }
          return beer;
        })
      };
    case BeerActionTypes.BEERS_SET_NEW:
      return {
        ...state,
        items: [...state.items, action.beer]
      };
    default:
      return state;
  }
};

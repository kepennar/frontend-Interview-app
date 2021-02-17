import { BeerActionTypes } from "./beers.model";

const defaultBeersState = {
  items:{},
  loading: false
};
export const beersReducer = (state = defaultBeersState, action) => {
  switch (action.type) {
    case BeerActionTypes.BEERS_SET:
      return { ...state, 
        items: action.beers.reduce((obj, beer) => {
          return {
            ...obj,
            [beer.uuid]: beer,
          };
        }, state.items)
      };
    case BeerActionTypes.BEERS_FETCH:
      return { ...state, loading: true };
    case BeerActionTypes.BEERS_FETCH_SUCCESS:
    case BeerActionTypes.BEERS_FETCH_FAILURE:
      return { ...state, loading: false };
    case BeerActionTypes.BEERS_SET_NEW:
      return  { ...state, 
        items :{
          ...state.items,
          [action.beer.uuid]: action.beer
        },
        loading: true
      };
    case BeerActionTypes.BEER_RATE:  
      return {...state, loading: true};
    case BeerActionTypes.BEER_RATE_SUCCESS:
        return  {...state, 
          items: {
            ...state.items,
            [action.beer.uuid]: action.beer
          },
          loading: false};
    case BeerActionTypes.BEER_RATE_FAILURE:
      return {...state, loading: false}; 
    default:
      return state;
  }
};

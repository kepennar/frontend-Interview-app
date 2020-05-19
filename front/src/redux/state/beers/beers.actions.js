import { BeerActionTypes } from "./beers.model";

export const fetchBeersIfNot = () => ({
  type: BeerActionTypes.BEERS_FETCH_IF_NOT
});
export const fetchBeers = () => ({
  type: BeerActionTypes.BEERS_FETCH
});

export const setBeers = beers => ({
  type: BeerActionTypes.BEERS_SET,
  beers
});

export const fetchBeersSuccess = () => ({
  type: BeerActionTypes.BEERS_FETCH_SUCCESS
});

export const fetchBeersFailure = () => ({
  type: BeerActionTypes.BEERS_FETCH_FAILURE
});

export const createBeer = beer => ({
  type: BeerActionTypes.BEERS_CREATE,
  beer
});

export const setNewlyCreatedBeer = beer => ({
  type: BeerActionTypes.BEERS_SET_NEW,
  beer
});


export const rateBeer = (beerID, score) => ({
  type: BeerActionTypes.BEERS_RATE,
  beerID,
  score,
});
export const rateBeerSuccess = beerID => ({
  type: BeerActionTypes.BEERS_RATE_SUCCESS,
  beerID,
});
export const rateBeerFailure = beerID => ({
  type: BeerActionTypes.BEERS_RATE_FAILURE,
  beerID,
});
export const setNewlyRatedBeer = beer => ({
  type: BeerActionTypes.BEERS_SET_RATE,
  beer,
});

export const updateBeer = beer =>  ({
  type: BeerActionTypes.BEERS_UPDATE,
  beer,
});
export const updateBeerSuccess = (beerID) => ({
  type: BeerActionTypes.BEERS_UPDATE_SUCCESS,
  beerID,
});
export const updateBeerFailure = () => ({
  type: BeerActionTypes.BEERS_UPDATE_FAILURE,
});

export const deleteBeer = beer =>  ({
  type: BeerActionTypes.BEERS_DELETE,
  beer,
});
export const deleteBeerSuccess = () => ({
  type: BeerActionTypes.BEERS_DELETE_SUCCESS,
});
export const deleteBeerFailure = (beer) => ({
  type: BeerActionTypes.BEERS_DELETE_FAILURE,
  beer
});
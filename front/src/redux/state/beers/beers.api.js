import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const postBeerRate = (beerID, score) => axios.post(`/beers/${beerID}/rate`, {score});
import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const rateBeer = (beer, rate) => axios.post(`/beers/${beer.uuid}/rate`, {score: rate});

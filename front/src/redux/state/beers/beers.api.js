import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const deleteBeer = beerID => axios.delete(`/beers/${beerID}`);
export const putBeer = beer => axios.put(`/beers/${beer.uuid}`, {
    name: beer.name,
    ibu: beer.ibu,
});
export const postBeerRate = (beerID, score) => axios.post(`/beers/${beerID}/rate`, {score});
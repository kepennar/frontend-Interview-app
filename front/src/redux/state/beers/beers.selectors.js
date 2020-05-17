export const beerItemsSelector = state => state.beers.items;

export const allBeersSelector = state => [
  ...beerItemsSelector(state),
];

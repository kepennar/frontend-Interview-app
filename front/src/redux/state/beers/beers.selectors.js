export const beerItemsSelector = state => state.beers.items;

export const allBeersSelector = state => [
  ...beerItemsSelector(state),
  ...state.beers.newItems
].sort((val1, val2) => val1.score > val2.score ? -1 : (val1.score < val2.score ? 1 : 0));

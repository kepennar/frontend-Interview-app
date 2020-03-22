export const beerItemsSelector = state =>
  state.beers.items.sort((a, b) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
  });

export const newBeersSelector = state => state.beer.newItems;

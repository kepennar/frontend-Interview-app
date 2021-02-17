export const beerItemsSelector = state => {
    return Object.values(state.beers.items);
}
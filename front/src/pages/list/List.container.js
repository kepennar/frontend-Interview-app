import { connect } from "react-redux";
import { compose, lifecycle, withHandlers } from "recompose";
import { fetchBeersIfNot, beerItemsSelector, createBeer, rateBeer } from "../../redux/state/beers";
import { List } from "./List.component";

const mapStateToProps = state => {
  return {
    loading: state.beers.loading,
    beers: beerItemsSelector(state)
  };
};

const mapDispatchToProps = { fetchBeersIfNot, createBeer, rateBeer };

const connectList = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withDidMountList = lifecycle({
  componentDidMount() {
    this.props.fetchBeersIfNot();
  },
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.loading !== this.props.loading){
      return true;
    }
    return false;
  },
});
//Handle click on smiley scores call reateBeer action with
// score= 10(inLove); 6(happy); 1(sad)
const handlers = withHandlers({
  rateClickHandler: props => (beer_id, button_name) => {
    let new_rate = 0;
    switch(button_name){
      case 'sad': new_rate = 1; break;
      case 'happy': new_rate = 6; break;
      case 'inLove': new_rate = 10; break;
    }
    props.rateBeer(beer_id, new_rate);
  },
})




export default compose(
  connectList,
  withDidMountList,
  handlers,
)(List);

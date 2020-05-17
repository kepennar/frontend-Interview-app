import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import {
  rateBeer,
  fetchBeersIfNot,
  allBeersSelector,
} from "../../redux/state/beers";
import { List } from "./List.component";

const mapStateToProps = state => {
  return {
    loading: state.beers.loading,
    beers: allBeersSelector(state),
  };
};

const mapDispatchToProps = {
  fetchBeersIfNot,
  rateBeer,
};

const connectList = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withDidMountList = lifecycle({
  componentDidMount() {
    this.props.fetchBeersIfNot();
  }
});

export default compose(
  connectList,
  withDidMountList
)(List);

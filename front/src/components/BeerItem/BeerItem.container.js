import { connect } from "react-redux";
import { updateBeerRate } from "../../redux/state/beers";
import BeerItem from './BeerItem';

const mapDispatchToProps = { updateBeerRate };

export default connect(
  null,
  mapDispatchToProps
)(BeerItem);

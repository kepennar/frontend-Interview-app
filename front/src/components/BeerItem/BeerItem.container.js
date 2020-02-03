import { connect } from "react-redux";
import {setBeerRate} from "../../redux/state/beers";
import BeerItem from "./BeerItem";

export default connect(
    null,
    { setBeerRate }
)(BeerItem);
import { connect } from "react-redux";
import { rateBeer } from "../../../redux/state/beers";
import { Rate } from "./Rate";

export default connect(null, { onRate: rateBeer })(Rate);
import { connect } from "react-redux";
import { setNewRate } from "../../../redux/state/beers";
import { Rate } from "./Rate.component";

const mapDispatchToProps = { setNewRate };

export default connect(
  null,
  mapDispatchToProps
)(Rate);

import React from "react";

import { connect } from "react-redux";
import { setBeerRate } from "../../../redux/state/beers";
import Rate from "./Rate.component";

const mapDispatchToProps = { setBeerRate };

const RateContainer = ({ beer, setBeerRate }) => {
  const onRate = rate => {
    switch (rate) {
      case "in-love-clicked":
        return { score: 3 };
      case "happy-clicked":
        return { score: 2 };
      case "sad-clicked":
        return { score: 1 };
      default:
        console.log("RateContainer: unknown value passed in switch case");
        return null;
    }
  };

  return <Rate beer={beer} onRate={onRate} setBeerRate={setBeerRate} />;
};

export default connect(
  null,
  mapDispatchToProps
)(RateContainer);

import React from "react";
import PropTypes from "prop-types";

import styles from "./Rate.module.scss";

const Rate = ({ onRate, setBeerRate, beer }) => (
  <div className={styles.rate}>
    <div
      id="in-love-clicked"
      className={styles.inLove}
      onClick={event => setBeerRate(beer, onRate(event.target.id))}
    />
    <div
      id="happy-clicked"
      className={styles.happy}
      onClick={event => setBeerRate(beer, onRate(event.target.id))}
    />
    <div
      id="sad-clicked"
      className={styles.sad}
      onClick={event => setBeerRate(beer, onRate(event.target.id))}
    />
  </div>
);

Rate.propTypes = {
  onRate: PropTypes.func.isRequired,
  setBeerRate: PropTypes.func.isRequired,
  beer: PropTypes.object.isRequired
};

export default Rate;

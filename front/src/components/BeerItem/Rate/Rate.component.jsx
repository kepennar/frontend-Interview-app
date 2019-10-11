import React from "react";
import PropTypes from "prop-types";
import styles from "./Rate.module.scss";

export const Rate = ({ onRate, setNewRate, beer }) => (
  <div className={styles.rate}>
    <div
      id="1"
      className={styles.inLove}
      onClick={event => setNewRate(onRate(event.target.id), beer)}
    />
    <div
      id="2"
      className={styles.happy}
      onClick={event => setNewRate(onRate(event.target.id), beer)}
    />
    <div
      id="3"
      className={styles.sad}
      onClick={event => setNewRate(onRate(event.target.id), beer)}
    />
  </div>
);

Rate.propTypes = {
  onRate: PropTypes.func.isRequired,
  setNewRate: PropTypes.func.isRequired,
  beer: PropTypes.object.isRequired
};

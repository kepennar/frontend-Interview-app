import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Rate.module.scss";
import { BeerActionTypes } from "../../../redux/state/beers/beers.model";

export const Rate = ({ beerId }) => {
  const dispatch = useDispatch();
  const onRate = score => () =>
    dispatch({ type: BeerActionTypes.BEERS_SET_RATE, beerId, score });

  return (
    <div className={styles.rate}>
      <div className={styles.inLove} onClick={onRate(10)} />
      <div className={styles.happy} onClick={onRate(5)} />
      <div className={styles.sad} onClick={onRate(1)} />
    </div>
  );
};

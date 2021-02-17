import React from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";

export const BeerItem = ({ beer: { name, ibu, score }, rateClickHandler }) => (
  <div className={styles.beerItem}>
    <div className={styles.name}>{name}</div>
    <div className={styles.ibu}>IBU: {ibu}</div>
    <div className={styles.score}>Score: {Number.isInteger(score)? score : score.toFixed(2)}</div>
    <div className={styles.rate}>
      <Rate rateClickHandler={rateClickHandler}/>
    </div>
  </div>
);

import React from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate";

export const BeerItem = ({ beer }) => (
  <div className={styles.beerItem}>
    <div className={styles.name}>{beer.name}</div>
    <div className={styles.ibu}>IBU: {beer.ibu}</div>
    <div className={styles.score}>Score: {beer.score.toPrecision(1)}</div>
    <div className={styles.rate}>
      <Rate beer={beer} />
    </div>
  </div>
);

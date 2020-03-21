import React from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";

export const BeerItem = ({ beer: { uuid: beerId, name, ibu, score } }) => (
  <div className={styles.beerItem}>
    <div className={styles.name}>{name}</div>
    <div className={styles.ibu}>IBU: {ibu}</div>
    <div className={styles.score}>Score: {Math.round(score)}</div>
    <div className={styles.rate}>
      <Rate beerId={beerId} />
    </div>
  </div>
);

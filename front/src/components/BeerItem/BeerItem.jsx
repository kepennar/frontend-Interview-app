import React from "react";

import styles from "./BeerItem.module.scss";
import Rate from "./Rate";

const BeerItem = ({ beer: { uuid, name, ibu, score }, updateBeerRate }) => (
  <div className={styles.beerItem}>
    <div className={styles.name}>{name}</div>
    <div className={styles.ibu}>IBU: {ibu}</div>
    <div className={styles.score}>Score: {score.toPrecision(1)}</div>
    <div className={styles.rate}>
      <Rate onRate={score => updateBeerRate({ uuid, score })}/>
    </div>
  </div>
);

export default BeerItem;
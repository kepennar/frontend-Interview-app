import React from "react";

import styles from "./BeerItem.module.scss";
import Rate from "./Rate/Rate.container";

export const BeerItem = ({ beer }) => {
  // Function onRate used to assign a rate depending on the button id clicked
  const onRate = entryVal => {
    let rate = {};
    switch (entryVal) {
      case "1":
        rate.score = 9;
        break;
      case "2":
        rate.score = 6;
        break;
      case "3":
        rate.score = 3;
        break;
      default:
        console.log("Bad switch case in onRate function");
    }
    return rate;
  };

  return (
    <div className={styles.beerItem}>
      <div className={styles.name}>{beer.name}</div>
      <div className={styles.ibu}>IBU: {beer.ibu}</div>
      <div className={styles.score}>Score: {beer.score.toPrecision(1)}</div>
      <div className={styles.rate}>
        <Rate beer={beer} onRate={onRate} />
      </div>
    </div>
  );
};

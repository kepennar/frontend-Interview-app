import React from "react";
import { BeerItem } from "../BeerItem";
import { Loader } from "../Loader";

import styles from "./BeerList.module.scss";

export const BeerList = ({ beers, loading }) => (
  <div className={styles.Beerlist}>
    {beers.map(beer => (
      <BeerItem key={beer.uuid} beer={beer} />
    ))}
    {loading && <Loader />}
  </div>
);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BeerItem } from "../BeerItem";
import { Loader } from "../Loader";

import styles from "./BeerList.module.scss";

export class BeerList extends Component {
  static propTypes = {
    beers: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    rateBeer: PropTypes.func,
  };

  render() {
    const {
      beers,
      loading,
      rateBeer,
    } = this.props;

    return (
      <div className={styles.Beerlist}>
        {
          !loading
          && beers.map(beer => {
            return (
              <BeerItem
                key={beer.uuid}
                beer={beer}
                rateBeer={(rate) => rateBeer(beer.uuid, rate)}
              />
            );
          })
        }
        {loading && <Loader />}
      </div>
    )
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BeerItem } from "../BeerItem";
import { Loader } from "../Loader";

import styles from "./BeerList.module.scss";

export class BeerList extends Component {
  static propTypes = {
    beers: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    setBeer: PropTypes.func,
    rateBeer: PropTypes.func,
    deleteBeer: PropTypes.func,
  };

  render() {
    const {
      beers,
      loading,
      setBeer,
      rateBeer,
      deleteBeer,
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
                setBeer={setBeer}
                rateBeer={(rate) => rateBeer(beer.uuid, rate)}
                deleteBeer={deleteBeer}
              />
            );
          })
        }
        {loading && <Loader />}
      </div>
    )
  }
}
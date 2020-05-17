import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Rate } from "./Rate";

import styles from "./BeerItem.module.scss";

export class BeerItem extends Component {
  static propTypes = {
    beer: PropTypes.shape({
        uuid: PropTypes.string,
        name: PropTypes.string,
        ibu: PropTypes.string,
        score: PropTypes.number,
    }).isRequired,
    rateBeer: PropTypes.func,
  };

  render() {
    const {
      score,
      name,
      ibu,
    } = this.props.beer;

    return (
      <div className={styles.beerItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.ibu}>IBU: {ibu}</div>
      <div className={styles.score}>Score: {score.toPrecision(1) }</div>
      <div className={styles.rate}>
        <Rate
          rateBeer={(rate) => this.props.rateBeer(rate)}
        />
      </div>
    </div>
    )
  }
}
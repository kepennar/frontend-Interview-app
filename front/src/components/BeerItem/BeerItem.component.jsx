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

  /**
   * This code is here to test if we do rerendering of the BeerItem component
   * Using https://www.npmjs.com/package/@welldone-software/why-did-you-render
   * will be a far better idea :)
   */
  state = {
    counter: 0,
  }

  shouldComponentUpdate(nextProps, _){
    return (
      nextProps.beer.score.toPrecision(1) !== this.props.beer.score.toPrecision(1)
      || nextProps.beer.name !== this.props.beer.name
      || nextProps.beer.ibu !== this.props.beer.ibu
      || nextProps.beer.uuid !== this.props.beer.uuid
    );
  }

  componentDidUpdate() {
    const counter = this.state.counter + 1;
    this.setState({
      counter,
    });
    console.log('Rerendering', counter, 'for BeerItem:', this.props.beer.name);
  }

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
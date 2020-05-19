import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BeerList } from "../../components/BeerList";
import { Button } from "../../components/Button";

import styles from "./List.module.scss";

export class List extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    rateBeer: PropTypes.func,
    setBeer: PropTypes.func,
    deleteBeer: PropTypes.func,
    beers: PropTypes.arrayOf(PropTypes.object).isRequired,
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
      <div>
        <div className={styles.list}>
          <BeerList
            beers={beers}
            loading={loading}
            setBeer={setBeer}
            rateBeer={rateBeer}
            deleteBeer={deleteBeer}
          />
        </div>
        <div className={styles.addBeer}>
          <Button type="link" to="/new/" text="Add a beer" />
        </div>
      </div>
    )
  }
}
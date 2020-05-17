import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Rate.module.scss';

const RATES = {
  'sad': 1,
  'happy': 5,
  'inLove': 10,
};

export class Rate extends PureComponent {
  static propTypes = {
    rateBeer: PropTypes.func.isRequired,
  };

  render() {
    const {
      rateBeer,
    } = this.props;

    return Object.keys(RATES).map(key => {
      return (
        <button
          key={key}
          onClick={() => rateBeer(RATES[key])}
          className={styles[key]}
        />
      )
    });
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { Button } from '../../components/Button';
import { Rate } from './Rate';

import styles from './BeerItem.module.scss';

export class BeerItem extends Component {
  static propTypes = {
    beer: PropTypes.shape({
        uuid: PropTypes.string,
        name: PropTypes.string,
        ibu: PropTypes.string,
        score: PropTypes.number,
        loading: PropTypes.bool,
    }).isRequired,
    rateBeer: PropTypes.func,
    setBeer: PropTypes.func,
    deleteBeer: PropTypes.func,
  };

  /**
   * This code is here to test if we do rerendering of the BeerItem component
   * Using https://www.npmjs.com/package/@welldone-software/why-did-you-render
   * will be a far better idea :)
   */
  state = {
    ibu: 0,
    name: '',
    counter: 0,
  }

  componentDidMount() {
    const {
      ibu,
      name,
    } = this.props.beer;

    this.setState({
      ibu,
      name,
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return (
      nextProps.beer.score.toPrecision(1) !== this.props.beer.score.toPrecision(1)
      || nextState.name !== this.state.name
      || nextState.ibu !== this.state.ibu
    );
  }

  componentDidUpdate() {
    const counter = this.state.counter + 1;
    this.setState({
      counter,
    });
    console.log('Rerendering', counter, 'for BeerItem:', this.props.beer.uuid);
  }


  onBlur = (type, value) => {
    const { beer } = this.props;
    this.props.setBeer({
      ...beer,
      [type]:  value,
    });
  }

  renderLoading () {
    return (
      <p className={styles.loading}>Loading</p>
    )
  }

  renderContent = () => {
    const {
      uuid,
      score,
    } = this.props.beer;

    const {
      ibu,
      name,
    } = this.state;

    return (
      <>
        <input
          type='text'
          value={name}
          className={styles.name}
          onBlur={(event) => this.onBlur('name', event.target.value)}
          onChange={(event)=> this.setState({name: event.target.value})}
        />
        <label className={styles.label} htmlFor={`ibu${uuid}`}>IBU:</label>
        <input
          id={`ibu${uuid}`}
          type='number'
          value={ibu}
          className={styles.ibu}
          onBlur={(event) => this.onBlur('ibu', event.target.value)}
          onChange={(event)=> this.setState({ibu: event.target.value})}
        />
        <div className={styles.score}>Score: {score.toPrecision(1) }</div>

        <div className={styles.rate}>
          <Rate
            rateBeer={(rate) => this.props.rateBeer(rate)}
          />
        </div>

        <Button
          type='button'
          text='Delete'
          onClick={() => this.props.deleteBeer(this.props.beer)}
        />
      </>
    );
  }

  render() {
    const {
      loading,
    } = this.props.beer;

    return (
      <div className={styles.beerItem}>
        { loading ? this.renderLoading() : this.renderContent() }
      </div>
    )
  }
}
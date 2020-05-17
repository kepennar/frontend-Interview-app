import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

export class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    type: 'button',
  }

  render() {
    const {
      text,
      to,
      type,
      onClick,
      disabled,
    } = this.props;


    return (
      <>
        {
          (type === 'button' || type === 'submit')
          && (
            <button
              onClick={onClick}
              to={to}
              type={type}
              disabled={disabled}
              className={styles.button}
            >
              {text}
            </button>
          )
        }
        {type === 'link' && (
          <Link
            to={to}
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={styles.button}
          >
            {text}
          </Link>
        )}
      </>
    )
  }
}
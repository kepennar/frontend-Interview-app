import React from "react";
import styles from "./Rate.module.scss";
import useRenderCount from '../../../utils/use-render-count'

export const Rate = ({ beer, onRate }) => {
  const render = useRenderCount();

  return (
    <>
      {render}
      <div className={styles.rate}>
        <div className={styles.inLove} onClick={() => onRate(beer, 10)} />
        <div className={styles.happy} onClick={() => onRate(beer, 5)} />
        <div className={styles.sad} onClick={() => onRate(beer, 1)} />
      </div>
    </>
  )
};

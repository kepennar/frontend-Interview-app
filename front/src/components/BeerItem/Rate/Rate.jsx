import React from "react";

import styles from "./Rate.module.scss";
export const Rate = ({ rateClickHandler }) => {
  return(
  <div className={styles.rate}>
    <div className={styles.inLove} onClick={rateClickHandler.bind(null, 'inLove')}/>
    <div className={styles.happy} onClick={rateClickHandler.bind(null, 'happy')}/>
    <div className={styles.sad} onClick={rateClickHandler.bind(null, 'sad')}/>
  </div>
);
}


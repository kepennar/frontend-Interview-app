import React from "react";

import styles from "./Rate.module.scss";
export const Rate = ({ onRate }) => (
 <div className={styles.rate}>
    <div onClick={() => { onRate(5); }} className={styles.inLove} />
    <div onClick={() => { onRate(3); }} className={styles.happy} />
    <div onClick={() => { onRate(1); }} className={styles.sad} />
  </div>);

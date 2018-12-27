import React from "react";

import styles from "./Rate.module.scss";
export const Rate = ({ onRate }) => (
  <div className={styles.rate}>
    <div className={styles.inLove} />
    <div className={styles.happy} />
    <div className={styles.sad} />
  </div>
);

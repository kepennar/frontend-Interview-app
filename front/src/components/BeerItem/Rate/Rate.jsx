import React from "react";

import styles from "./Rate.module.scss";
import RenderCount from "../../common/RenderCount";
// 10 5 1 more realistic ?
const Rate = ({ onRate }) => (
    <div className={styles.rate}>
        <RenderCount className={styles.renderCount}/>
        <div className={styles.inLove} onClick={() => onRate(10)}/>
        <div className={styles.happy} onClick={() => onRate(5)}/>
        <div className={styles.sad} onClick={() => onRate(1)}/>
    </div>
);

export default Rate;

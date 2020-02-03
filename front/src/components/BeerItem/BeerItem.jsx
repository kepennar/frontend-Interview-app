import React from "react";

import styles from "./BeerItem.module.scss";
import Rate from "./Rate";
// import RenderCount from "../common/RenderCount";

const BeerItem = ({ beer: { uuid, name, ibu, score }, setBeerRate }) => (
    <div className={styles.beerItem}>
        {/*<RenderCount/>*/}
        <div className={styles.name}>{name}</div>
        <div className={styles.ibu}>IBU: {ibu}</div>
        <div className={styles.score}>Score: {Math.round(score)}</div>
        <div className={styles.rate}>
            <Rate onRate={(score) => setBeerRate(uuid, score)}/>
        </div>
    </div>
);

export default BeerItem;
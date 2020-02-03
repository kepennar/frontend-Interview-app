import React, {useEffect, useRef} from 'react';
import styles from './RenderCount.module.scss';

const RenderCount = () => {
    const counter = useRef(0);

    useEffect(() => {
        ++counter.current;
    });

    return (
        <span className={styles.renderCount}>Rendered {counter.current} times</span>
    );
};

export default RenderCount;
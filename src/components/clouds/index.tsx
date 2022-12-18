import React from "react";
import styles from './cloud.module.css'
import cx from 'classnames'

type Props = {
    actual?: string
}

const Cloud: React.FC<Props> = (props: Props) => {
    return <>
        <div id="clouds">
            <div className={cx(styles.cloud, styles.x1)}></div>
            <div className={cx(styles.cloud, styles.x2)}></div>
            <div className={cx(styles.cloud, styles.x3)}></div>
            <div className={cx(styles.cloud, styles.x4)}></div>
            <div className={cx(styles.cloud, styles.x5)}></div>
        </div>
    </>
}

export default Cloud;
import React from 'react'
import styles from './CroppedBorder.module.scss'
import { CroppedBorderProps } from './CroppedBorder.props'
import classnames from 'classnames'

const CroppedBorder = ({className} : CroppedBorderProps) => {
    return (
        <div className={classnames(styles.container, className)}>
            <span className={styles.top_left}/>
            <span className={styles.bottom_right}/>
        </div>
    )
}

export default CroppedBorder

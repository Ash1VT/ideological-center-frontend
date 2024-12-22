import React from 'react'
import styles from './MediaHeader.module.scss'
import { MediaHeaderProps } from './MediaHeader.props'

const MediaHeader = ({title} : MediaHeaderProps) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
        </div>
    )
}

export default MediaHeader

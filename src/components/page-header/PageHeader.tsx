import React from 'react'
import styles from './PageHeader.module.scss'
import { PageHeaderProps } from './PageHeader.props'

const PageHeader = ({title,image} : PageHeaderProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.image} style={{backgroundImage: `url(${image})`}}/>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default PageHeader

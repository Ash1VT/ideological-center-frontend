import React from 'react'
import styles from './PageHeader.module.scss'

const PageHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image} style={{backgroundImage: 'url(./images/pages/events.jpg)'}}/>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>Афиша мероприятий</h1>
            </div>
        </div>
    )
}

export default PageHeader

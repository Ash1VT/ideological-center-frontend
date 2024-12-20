import React from 'react'
import styles from './EventSection.module.scss'
import { EventSectionProps } from './EventSection.props'

const EventSection = ({title, children} : EventSectionProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default EventSection

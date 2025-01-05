import React from 'react'
import { MuseumSectionProps } from './MuseumSection.props'
import styles from './MuseumSection.module.scss'

const MuseumSection = ({section} : MuseumSectionProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>{section.name}</h2>
                </div>
                <div className={styles.description}>
                    <p>{section.description}</p>
                </div>
                <div className={styles.image}>
                    <img src={section.imageUrl} alt="Museum"/>
                </div>
            </div>
        </div>
    )
}

export default MuseumSection

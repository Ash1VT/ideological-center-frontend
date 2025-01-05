import React from 'react'
import { MuseumSectionsListProps } from './MuseumSectionsList.props'
import styles from './MuseumSectionsList.module.scss'
import MuseumSection from '../museum-section/MuseumSection'

const MuseumSectionsList = ({title, sections} : MuseumSectionsListProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>
            <div className={styles.sections}>
                {sections.map((section, index) => (
                    <MuseumSection key={index} section={section} />
                ))}
            </div>
        </div>
    )
}

export default MuseumSectionsList

import React, { useCallback, useMemo } from 'react'
import { MuseumSectionProps } from './MuseumSection.props'
import styles from './MuseumSection.module.scss'
import classnames from 'classnames'
import { MuseumSectionModel } from 'src/models/museum'

const MuseumSection = ({section} : MuseumSectionProps) => {

    const getInfoClass = useCallback((section: MuseumSectionModel) => {
        let infoClass = styles.info

        if (!section.name) {
            infoClass = classnames(infoClass, styles.noName)
        }

        if (!section.description) {
            infoClass = classnames(infoClass, styles.noDescription)
        }

        return infoClass
    }, [section])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {section.name &&
                    <div className={styles.title}>
                        <h2>{section.name}</h2>
                    </div>
                }
                <div className={getInfoClass(section)}>
                    <div className={styles.image}>
                        <img src={section.imageUrl} alt="Museum"/>
                    </div>
                    {section.description && 
                        <div className={styles.description}>
                            <p>{section.description}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MuseumSection

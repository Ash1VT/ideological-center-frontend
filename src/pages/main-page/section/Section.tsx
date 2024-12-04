import React from 'react'
import styles from './Section.module.scss'
import { SectionProps } from './Section.types'

const Section = ({title, subtitle, children}: SectionProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h3>
                        {title}
                    </h3>
                </div>
                <div className={styles.subtitle}>
                    <h2>
                        {subtitle}
                    </h2>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Section

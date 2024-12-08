import React from 'react'
import styles from './Section.module.scss'
import { SectionProps } from './Section.types'
import { motion } from 'framer-motion'

const Section = ({title, subtitle, children}: SectionProps) => {
    return (
        <div className={styles.container}>
            <motion.div className={styles.wrapper}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
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
            </motion.div>
        </div>
    )
}

export default Section

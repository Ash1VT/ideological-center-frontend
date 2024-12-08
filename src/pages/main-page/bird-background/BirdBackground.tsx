import React from 'react'
import styles from './BirdBackground.module.scss'
import classnames from 'classnames'
import { motion } from 'framer-motion'

const BirdBackground = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <motion.div className={styles.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}>
                    Ресурсный центр
                </motion.div>
                <motion.div className={styles.subtitle}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}>
                    По духовно-нравственному и патриотическому<br/>воспитанию молодёжи
                </motion.div>
            </div>
            <div className={classnames(styles.bird_container, styles.one)}>
                <div className={`${styles.bird} ${styles.one}`}></div>
            </div>
            
            <div className={classnames(styles.bird_container, styles.two)}>
                <div className={`${styles.bird} ${styles.two}`}></div>
            </div>
            
            <div className={classnames(styles.bird_container, styles.three)}>
                <div className={`${styles.bird} ${styles.three}`}></div>
            </div>
            
            <div className={classnames(styles.bird_container, styles.four)}>
                <div className={`${styles.bird} ${styles.four}`}></div>
            </div>
        </div>
    )
}

export default BirdBackground

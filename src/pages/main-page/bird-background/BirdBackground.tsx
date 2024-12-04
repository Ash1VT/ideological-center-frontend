import React from 'react'
import styles from './BirdBackground.module.scss'
import classnames from 'classnames'

const BirdBackground = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Ресурсный центр
                </div>
                <div className={styles.subtitle}>
                    По духовно-нравственному и патриотическому<br/>воспитанию молодёжи
                </div>
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

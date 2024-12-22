import React from 'react'
import styles from './MediaSearch.module.scss'
import { motion } from 'framer-motion'

const MediaSearch = () => {
    return (
        <motion.div className={styles.container}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}>
            <input type='text' placeholder='Поиск...' />
        </motion.div>
    )
}

export default MediaSearch

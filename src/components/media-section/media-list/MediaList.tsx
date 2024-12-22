import React from 'react'
import { MediaListProps } from './MediaList.props'
import styles from './MediaList.module.scss'
import MediaCard from '../media-card/MediaCard'
import { motion } from 'framer-motion'

const MediaList = ({media} : MediaListProps) => {
    return (
        <motion.div className={styles.container}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}>
            <div className={styles.content}>
                {media.map((media) => (
                    <MediaCard key={media.id} media={media}/>
                ))}
            </div>
        </motion.div>
    )
}

export default MediaList

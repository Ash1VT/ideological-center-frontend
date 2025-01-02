import React from 'react'
import styles from './MediaCard.module.scss'
import { MediaCardProps } from './MediaCard.props'
import { useNavigate } from 'react-router-dom'

const MediaCard = ({media, onMediaClick} : MediaCardProps) => {
    const handleClick = () => {
        onMediaClick(media.id)
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.image}>
                <img src={media.image}></img>
            </div>
            <div className={styles.title}>
                <p>{media.name}</p>
            </div>
        </div>
    )
}

export default MediaCard

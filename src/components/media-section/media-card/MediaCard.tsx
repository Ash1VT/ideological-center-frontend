import React from 'react'
import styles from './MediaCard.module.scss'
import { MediaCardProps } from './MediaCard.props'
import { useNavigate } from 'react-router-dom'

const MediaCard = ({media} : MediaCardProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/norm-documents/${media.id}`)
    }

    return (
        <div className={styles.container}>
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

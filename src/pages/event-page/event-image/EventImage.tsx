import React from 'react'
import styles from './EventImage.module.scss'
import { EventImageProps } from './EventImage.props'

const EventImage = ({image} : EventImageProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image}></img>
            </div>
        </div>
    )
}

export default EventImage

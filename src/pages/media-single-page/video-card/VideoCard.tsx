import React from 'react'
import ReactPlayer from 'react-player'
import { VideoCardProps } from './VideoCard.props'
import styles from './VideoCard.module.scss'

const VideoCard = ({video} : VideoCardProps) => {
    return (
        <div className={styles.container}>
            <ReactPlayer className={styles.player} controls url={video.url} />
        </div>
    )
}

export default VideoCard

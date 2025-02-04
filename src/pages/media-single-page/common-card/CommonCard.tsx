import React from 'react'
import styles from './CommonCard.module.scss'
import { CommonCardProps } from './CommonCard.props'
import DownloadButton from 'src/pages/media-single-page/ui/download-button/DownloadButton'

const CommonCard = ({document, descriptionTitle, buttonLabel} : CommonCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={document.imageUrl} alt={document.name}></img>
            </div>
            <div className={styles.title}>
                <p>{descriptionTitle}</p>
            </div>
            <div className={styles.description}>
                <p>{document.description}</p>
            </div>
            <DownloadButton name={document.name} title={buttonLabel} link={document.url}/>
        </div>
    )
}

export default CommonCard

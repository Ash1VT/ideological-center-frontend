import React from 'react'
import styles from './DownloadButton.module.scss'
import { DownloadButtonProps } from './DownloadButton.props'

const DownloadButton = ({name, title, link} : DownloadButtonProps) => {
    return (
        <div className={styles.button}>
            <a href={link} target='_blank' download={name}>{title}</a>
        </div>
    )
}

export default DownloadButton

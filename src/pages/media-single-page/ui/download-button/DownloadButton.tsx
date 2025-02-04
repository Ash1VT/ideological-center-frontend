import React from 'react'
import styles from './DownloadButton.module.scss'
import { DownloadButtonProps } from './DownloadButton.props'
import classnames from 'classnames'

const DownloadButton = ({name, title, link} : DownloadButtonProps) => {
    const buttonClass = link ? classnames(styles.button) : classnames(styles.button, styles.disabled)

    return (
        <button className={buttonClass} disabled={!link}>
            <a href={link} target='_blank' download={name} >{title}</a>
        </button>
    )
}

export default DownloadButton

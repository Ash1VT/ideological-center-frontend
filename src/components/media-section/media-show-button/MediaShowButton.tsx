import React from 'react'
import { MediaShowButtonProps } from './MediaShowButton.props'
import styles from './MediaShowButton.module.scss'

const MediaShowButton = ({title, onShow} : MediaShowButtonProps) => {

    const handleClick = async () => {
        await onShow()
    }

    return (
        <div className={styles.button}>
            <button onClick={handleClick}>{title}</button>
        </div>
    )
}

export default MediaShowButton

import React from 'react'
import { EventsShowButtonProps } from './EventsShowButton.props'
import styles from './EventsShowButton.module.scss'

const EventsShowButton = ({title, onShow} : EventsShowButtonProps) => {

    const handleClick = async () => {
        await onShow()
    }

    return (
        <div className={styles.button}>
            <button onClick={handleClick}>{title}</button>
        </div>
    )
}

export default EventsShowButton

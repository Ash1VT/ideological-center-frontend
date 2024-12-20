import React from 'react'
import styles from './EventsMenuItem.module.scss'
import { EventsMenuItemProps } from './EventsMenuItem.props'
import classnames from 'classnames'

const EventsMenuItem = ({item, selectedItem, onItemSelected} : EventsMenuItemProps) => {
    const onItemSelectedHandler = () => {
        onItemSelected(item.id)
    }
    
    return (
        <div
            className={classnames(styles.item, selectedItem === item.id ? styles.active : '')}
            onClick={onItemSelectedHandler}
        >
            {item.label}
        </div>
    )
}

export default EventsMenuItem

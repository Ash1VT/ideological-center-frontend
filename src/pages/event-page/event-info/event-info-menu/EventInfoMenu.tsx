import React, { useCallback } from 'react'
import styles from './EventInfoMenu.module.scss'
import { EventInfoMenuProps } from './EventInfoMenu.props'
import classnames from 'classnames'


const EventInfoMenu = ({items, activeItem, onItemSelected} : EventInfoMenuProps) => {
    
    const getActiveClassName = useCallback((id: number) => {
        if (activeItem === id)
            return styles.active

        return ''
    }, [activeItem])

    return (
        <div className={styles.container}>
            {items.map((item) => (
                <div key={item.id} 
                     className={classnames(styles.item, getActiveClassName(item.id))} 
                     onClick={() => onItemSelected(item.id)}>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default EventInfoMenu

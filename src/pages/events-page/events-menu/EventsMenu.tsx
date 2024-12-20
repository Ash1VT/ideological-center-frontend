import React, { useState } from 'react'
import styles from './EventsMenu.module.scss'
import classnames from 'classnames';
import { EventsMenuProps } from './EventsMenu.props';
import EventsMenuItem from './events-menu-item/EventsMenuItem';

const EventsMenu = ({items, selectedItem, onItemSelected} : EventsMenuProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {items.map((item) => (
                    <EventsMenuItem key={item.id} item={item} selectedItem={selectedItem} onItemSelected={onItemSelected} />
                ))}
            </div>
        </div>
    )
}

export default EventsMenu

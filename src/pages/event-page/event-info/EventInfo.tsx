import React, { useState } from 'react'
import styles from './EventInfo.module.scss'
import EventSection from '../event-section/EventSection'
import { EventInfoProps } from './EventInfo.props'
import { EventInfoMenuItem } from './event-info-menu/EventInfoMenu.props'
import EventInfoMenu from './event-info-menu/EventInfoMenu'
import { EventInfoContentItem } from './event-info-content/EventInfoContent.props'
import EventInfoContent from './event-info-content/EventInfoContent'

const EventInfo = ({event} : EventInfoProps) => {
    const [activeItem, setActiveItem] = useState(0)

    const menuItems: EventInfoMenuItem[] = [
        {
            id: 0,
            name: 'Место проведения'
        },
        {
            id: 1,
            name: 'Участники'
        },
        {
            id: 2,
            name: 'Контакты координатора'
        }
    ]

    const menuContents: EventInfoContentItem[] = [
        {
            id: 0,
            text: event.location,
            image: './images/event/map.png'
        },
        {
            id: 1,
            text: event.participants,
            image: './images/event/round-table.png'
        },
        {
            id: 2,
            text: event.coordinatorContact,
            image: './images/event/information.png'
        }
    ]

    const onItemSelected = (id: number) => {
        setActiveItem(id)
    }

    return (
        <EventSection title='Дополнительная информация'>
            <div className={styles.container}>
                <EventInfoMenu items={menuItems} activeItem={activeItem} onItemSelected={onItemSelected}/>
                <EventInfoContent items={menuContents} activeItem={activeItem}/>
            </div>
        </EventSection>
    )
}

export default EventInfo

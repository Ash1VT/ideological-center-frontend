import React from 'react'
import styles from './EventCard.module.scss'
import { EventCardProps } from './EventCard.props'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';

const EventCard = ({event} : EventCardProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/events/${event.id}`)
    }

    const eventInterval = `${event.startDate} - ${event.endDate}`
    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.image}>
                <img src={event.image}></img>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.location}>
                        <PlaceIcon/>
                        <p>{event.location}</p>
                    </div>
                    <div className={styles.date}>
                        <AccessTimeIcon/>
                        <p>{eventInterval}</p>
                    </div>
                </div>
                <div className={styles.title}>
                    <h3>{event.title}</h3>
                </div>
            </div>
            
        </div>
    )
}

export default EventCard

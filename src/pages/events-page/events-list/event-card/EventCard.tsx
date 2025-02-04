import React, { useCallback } from 'react'
import styles from './EventCard.module.scss'
import classnames from 'classnames'
import CancelIcon from '@mui/icons-material/Cancel';
import { EventCardProps } from './EventCard.props';
import { getMonthRusShortName } from 'src/utils/calendar';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { EventStatus } from 'src/models/events';
import PlaceIcon from '@mui/icons-material/Place';
import { Link, useNavigate } from 'react-router-dom';

const EventCard = ({event} : EventCardProps) => {
    const navigate = useNavigate()

    const startDay = event.startDate.getDate()
    const startMonth = getMonthRusShortName(event.startDate.getMonth())

    const endDay = event.endDate.getDate()
    const endMonth = getMonthRusShortName(event.endDate.getMonth())

    const handleClick = () => {
        navigate(`/events/${event.id}`)
    }

    const PassedStatus = () => {
        return (
            <div className={classnames(styles.status, styles.passed)}>
                <CancelIcon className={styles.icon}/>
                <p>Мероприятие завершено</p>
            </div>
        )
    }

    const PassingStatus = () => {
        return (
            <div className={classnames(styles.status, styles.passing)}>
                <NotificationsActiveIcon className={styles.icon}/>
                <p>Мероприятие проходит</p>
            </div>
        )
    }

    const PlannedStatus = () => {
        return (
            <div className={classnames(styles.status, styles.planned)}>
                <NextPlanIcon className={styles.icon}/>
                <p>Мероприятие запланировано</p>
            </div>
        )
    }

    const getEventEndDate = useCallback(() => {
        if (startMonth === endMonth && startDay === endDay) {
            return null;
        }

        return (
            <>
                <div className={styles.separator}>
                        <p>-</p>
                </div>
                <div className={styles.date}>
                        <p className={styles.day}>{endDay}</p>
                        <p className={styles.month}>{endMonth}</p>
                </div>
            </>
        )

    }, [event.endDate])

    const getEventStatus = useCallback(() => {
        if (event.status === EventStatus.Planned) {
            return <PlannedStatus/>
        }

        if (event.status === EventStatus.Passing) {
            return <PassingStatus/>
        }
        
        if (event.status === EventStatus.Passed) {
            return <PassedStatus/>
        }

    }, [event.status])

    const getInfoClassName = useCallback(() => {
        if (event.status === EventStatus.Planned) {
            return styles.planned
        }

        if (event.status === EventStatus.Passing) {
            return styles.passing
        }
        
        if (event.status === EventStatus.Passed) {
            return styles.passed
        }

    }, [event.status])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.date}>
                    <p className={styles.day}>{startDay}</p>
                    <p className={styles.month}>{startMonth}</p>
                </div>
                {getEventEndDate()}
            </div>
            <div className={styles.image}>
                <img src={event.imageUrl}></img>
            </div>
            <div className={styles.content}>
                <div className={classnames(styles.info, getInfoClassName())}>
                    <h3 className={styles.title}>{event.name}</h3>
                    <p className={styles.description}>{event.shortDescription}</p>
                    <div className={styles.location}>
                        <p>{event.location}</p>
                        <PlaceIcon/>
                    </div>
                </div>
                {getEventStatus()}
                <div className={styles.button}>
                    <Link to={`/events/${event.id}`} target='_blank'>
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EventCard

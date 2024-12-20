import React, { useCallback } from 'react'
import styles from './EventCard.module.scss'
import classnames from 'classnames'
import CancelIcon from '@mui/icons-material/Cancel';
import { EventCardProps } from './EventCard.props';
import { getMonthRusShortName } from 'src/utils/calendar';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { EventState } from 'src/redux/models/events';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';

const EventCard = ({event} : EventCardProps) => {
    const navigate = useNavigate()

    const startDay = event.startDate.getDay()
    const startMonth = getMonthRusShortName(event.startDate.getMonth())

    const endDay = event.endDate.getDay()
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
        if (event.state === EventState.Planned) {
            return <PlannedStatus/>
        }

        if (event.state === EventState.Passing) {
            return <PassingStatus/>
        }
        
        if (event.state === EventState.Passed) {
            return <PassedStatus/>
        }

    }, [event.state])

    const getInfoClassName = useCallback(() => {
        if (event.state === EventState.Planned) {
            return styles.planned
        }

        if (event.state === EventState.Passing) {
            return styles.passing
        }
        
        if (event.state === EventState.Passed) {
            return styles.passed
        }

    }, [event.state])

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
                <img src={event.image}></img>
            </div>
            <div className={styles.content}>
                <div className={classnames(styles.info, getInfoClassName())}>
                    <h3 className={styles.title}>{event.title}</h3>
                    <p className={styles.description}>{event.shortDescription}</p>
                    <div className={styles.location}>
                        <p>{event.location}</p>
                        <PlaceIcon/>
                    </div>
                </div>
                {getEventStatus()}
                <div className={styles.button}>
                    <button onClick={() => {handleClick()}}>
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCard

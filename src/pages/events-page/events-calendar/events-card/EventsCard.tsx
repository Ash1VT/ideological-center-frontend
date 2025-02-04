import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { EventCardProps } from './EventCard.types'
import styles from './EventsCard.module.scss'
import useBlockSize from 'src/hooks/useBlockSize'
import { getMonthName, getWeekDayName } from 'src/utils/calendar'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const EventsCard = ({events, day}: EventCardProps) => {
    const { blockWidth, blockRef } = useBlockSize<HTMLDivElement>();

    return (
        <motion.div 
            className={styles.container}
            ref={blockRef}
            initial={{ opacity: 0, x: 0}}
            animate={{ opacity: 1, x: -blockWidth }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}>
            <div className={styles.card}>
                <div className={styles.date}>
                    <motion.div 
                            key={`ed-${day.id}`}
                            className={styles.day}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}>
                        {day.dayNum}
                    </motion.div>
                    <motion.div 
                            key={`em-${day.id}`}
                            className={styles.month}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}>
                        {getMonthName(day.monthNum)}
                    </motion.div>
                    <motion.div
                            key={`ew-${day.id}`} 
                            className={styles.weekday}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            >
                        {getWeekDayName(day.weekDayNum)}
                    </motion.div>
                </div>
                <ul className={styles.events}>
                    {events.length > 0 ? events.map((event, index) => (
                        <motion.li key={`${day.dayNum}-${event.id}`} 
                                   className={styles.event}
                                   initial={{ opacity: 0, height: 0}}
                                   animate={{ opacity: 1, height: 'auto' }}
                                   transition={{ duration: 0.5 }}
                                   >
                            <Link to={`/events/${event.id}`} target="_blank" className={styles.eventLink}>{event.name}</Link>
                        </motion.li>
                    )) : <motion.div key={`${day.dayNum}-empty`} 
                                     className={styles.empty}
                                     initial={{ opacity: 0, scale: 0.8 }}
                                     animate={{ opacity: 1, scale: 1 }}
                                     transition={{ duration: 0.5 }}>
                            <p>Нет мероприятий</p>
                        </motion.div>}
                </ul>
            </div>
        </motion.div>
    )
}

export default EventsCard

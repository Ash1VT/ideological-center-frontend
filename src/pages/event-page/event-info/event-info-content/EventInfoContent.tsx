import React from 'react'
import styles from './EventInfoContent.module.scss'
import { EventInfoContentProps } from './EventInfoContent.props'
import { AnimatePresence, motion } from 'framer-motion'

const EventInfoContent = ({items, activeItem} : EventInfoContentProps) => {
    const item =  items.find((item) => item.id === activeItem)

    return (
        <div className={styles.container}>
            <AnimatePresence key={`content-${item?.id}`}>
                {item &&
                    <motion.div className={styles.content}
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}>
                        {item.text && 
                            <div className={styles.text}>
                                <p>{item.text}</p>
                            </div>
                        }
                        {item.image && 
                            <div className={styles.image}>
                                <img src={item.image}></img>
                            </div>
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default EventInfoContent

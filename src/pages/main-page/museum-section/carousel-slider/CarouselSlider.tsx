import React, { useCallback, useEffect, useState } from 'react'
import styles from './CarouselSlider.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import classnames from 'classnames'
import { CarouselSliderProps } from './CarouselSlider.props'
import { useMediaQuery } from '@mui/material'
import useBlockSize from 'src/hooks/useBlockSize'


const CarouselSlider = ({items}: CarouselSliderProps) => {
    const [frontItem, setFrontItem] = useState(0)
    const [rotationAngle, setRotationAngle] = useState(0)

    const {blockHeight: titleHeight, blockRef: titleRef} = useBlockSize<HTMLDivElement>()

    const is700= useMediaQuery('(max-width: 760px)')
    const is600= useMediaQuery('(max-width: 600px)')
    const is450= useMediaQuery('(max-width: 450px)')
    
    let interval: NodeJS.Timer;
    
    useEffect(() => {
        interval = setInterval(() => {
            setFrontItem((frontItem + 1) % items.length)
            setRotationAngle(rotationAngle + 360 / items.length)
        }, 10000)

        return () => clearInterval(interval)
    }, [frontItem])

    const getItemClick = useCallback((index: number) => {
        const nextItem = () => {
            setFrontItem((frontItem + 1) % items.length)
            setRotationAngle(rotationAngle + 360 / items.length)
            clearInterval(interval)
        }
    
        const prevItem = () => {
            setFrontItem((frontItem - 1 + items.length) % items.length)
            setRotationAngle(rotationAngle - 360 / items.length)
            clearInterval(interval)
        }


        if (index === frontItem + 1 || (frontItem === items.length - 1 && index === 0)) {
            return nextItem
        } 
        
        if (index === frontItem - 1 || (frontItem === 0 && index === items.length - 1)) {
            return prevItem
        }

    }, [frontItem, rotationAngle])

    const getZvalue = useCallback(() => {
        if (is450) {
            return 22;
        }

        if (is600) {
            return 30;
        }

        if (is700) {
            return 34;
        }

        return 50

    }, [is700, is600, is450])


    const activeItemStyle = {
        transform: `rotateY(calc(${frontItem} * ${360 / items.length}deg)) rotateX(3deg) translateZ(${items.length * getZvalue() * 1.1}px) scale(1.1)`,
        boxShadow: '0 0 60px rgba(0, 0, 0, 0.5)'
    }

    const getItemStyle = useCallback((index: number) => {
        return {
            transform: `rotateY(calc(${index} * ${360 / items.length}deg)) translateZ(${items.length * getZvalue()}px)`,
        }
    }, [is700, is600, is450])

    const getItemHoverClassname = useCallback((index: number) => {
        if (index === frontItem) {
            return ''
        }

        // Для следующего элемента
        if (index === frontItem + 1 || (frontItem === items.length - 1 && index === 0)) {
            return styles.hover
        } 
        
        // Для предыдущего элемента
        if (index === frontItem - 1 || (frontItem === 0 && index === items.length - 1)) {
            return styles.hover
        }
        
        return ''
    }, [frontItem, rotationAngle])

    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <AnimatePresence>
                    <motion.div key={`cs-title-${frontItem}`}
                                ref={titleRef}
                                className={styles.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}>
                        {items[frontItem].title}
                    </motion.div>
                    <motion.div key={`cs-description-${frontItem}`}
                                className={styles.description}
                                initial={{ opacity: 0, transform: `translateY(-${titleHeight}px)`}}
                                animate={{ opacity: 1, transform: 'translateY(0)'}}
                                transition={{ duration: 0.5 }}>
                        {items[frontItem].description}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.carousel} 
                     style={{transform: `perspective(1100px) rotateX(-9deg) rotateY(${-rotationAngle}deg)`}}>
                     {items.map((item, index) => {
                        return (
                            <div key={index} className={classnames(styles.item)} 
                                style={index === frontItem ? activeItemStyle : getItemStyle(index)}
                                onClick={getItemClick(index)}>
                                <img src={item.image} className={getItemHoverClassname(index)}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CarouselSlider

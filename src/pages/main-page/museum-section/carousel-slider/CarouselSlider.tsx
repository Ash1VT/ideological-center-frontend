import React, { useCallback, useEffect, useState } from 'react'
import styles from './CarouselSlider.module.scss'
import { motion } from 'framer-motion'


const CarouselSlider = () => {
    const [frontItem, setFrontItem] = useState(0)
    let interval: NodeJS.Timer;

    const items = [
        {src: '/images/calendar/autumn1.gif'},
        {src: '/images/test.jpg'},
        {src: '/images/test.jpg'},
        {src: '/images/test.jpg'},
        {src: '/images/test.jpg'},
        {src: '/images/test.jpg'},
    ]
    
    useEffect(() => {
        interval = setInterval(() => {
            setFrontItem((frontItem + 1) % items.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [frontItem])

    const onItemClick = (index: number) => {
        setFrontItem(index)
        
        if (frontItem === index) return
        clearInterval(interval)
    }

    const rotateDegree = frontItem * 360 / items.length

    return (
        <div className={styles.container}>
            <motion.div className={styles.carousel} 
                        style={{transform: `perspective(1100px) rotateY(${-rotateDegree}deg)`}}>
                {items.map((item, index) => {
                    return (
                        <motion.div className={styles.item} 
                             style={{transform: `rotateY(calc(${index} * ${360 / items.length}deg)) translateZ(${items.length * 44}px)`}}
                             onClick={() => onItemClick(index)}>
                            
                            <img src={item.src}></img>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default CarouselSlider

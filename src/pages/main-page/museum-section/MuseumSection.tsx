import React from 'react'
import styles from './MuseumSection.module.scss'
import Section from '../section/Section'
import CarouselSlider from './carousel-slider/CarouselSlider'

const MuseumSection = () => {
    return (
        <Section title={'Музей'} subtitle={'Крутой музей'}>
            <div className={styles.container}>
                <CarouselSlider/>
            </div>
        </Section>
    )
}

export default MuseumSection

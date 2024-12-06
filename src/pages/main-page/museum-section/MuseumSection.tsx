import React from 'react'
import styles from './MuseumSection.module.scss'
import Section from '../section/Section'
import CarouselSlider from './carousel-slider/CarouselSlider'
import { CarouselSliderItem } from './carousel-slider/CarouselSlider.props'
import SectionButton from '../ui/section-button/SectionButton'

const MuseumSection = () => {
    const items: CarouselSliderItem[] = [
        {
            image: './images/test.jpg',
            title: 'Фотка 1',
            description: 'Музеи России Музеи России Музеи России Музеи России Музеи России Музеи России Музеи России'
        },
        {
            image: './images/test.jpg',
            title: 'Фотка 2',
            description: 'Музеи России'
        },
        {
            image: './images/test.jpg',
            title: 'Фотка 3',
            description: 'Музеи России'
        },
        {
            image: './images/test.jpg',
            title: 'Фотка 4',
            description: 'Музеи России'
        },
        {
            image: './images/test.jpg',
            title: 'Фотка 5',
            description: 'Музеи России'
        },
        {
            image: './images/test.jpg',
            title: 'Фотка 6',
            description: 'Музеи России'
        }
    ]

    return (
        <Section title={'Музей'} subtitle={'Крутой музей'}>
            <div className={styles.container}>
                <CarouselSlider items={items}/>
                <SectionButton title='Перейти к странице музея' onClick={() => {}}/>
            </div>
        </Section>
    )
}

export default MuseumSection

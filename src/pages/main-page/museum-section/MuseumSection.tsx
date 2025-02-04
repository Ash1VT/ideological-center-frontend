import React from 'react'
import styles from './MuseumSection.module.scss'
import Section from '../section/Section'
import CarouselSlider from './carousel-slider/CarouselSlider'
import { CarouselSliderItem } from './carousel-slider/CarouselSlider.props'
import SectionButton from '../ui/section-button/SectionButton'
import useFetchData from 'src/hooks/useFetchData'
import MuseumService from 'src/services/MuseumService'
import { MuseumHallModel } from 'src/models/museum'
import Loader from 'src/components/loader/Loader'
import { useNavigate } from 'react-router-dom'

const MuseumSection = () => {
    const navigate = useNavigate()
    
    const {isLoading, data: items} = useFetchData<CarouselSliderItem[]>(async () => {
        const data = await MuseumService.retrieveMuseumHalls()
        return data.items.map((museumHall: MuseumHallModel) => ({
            title: museumHall.name,
            image: museumHall.imageUrl,
            description: museumHall.description
        }))
    }, [], {isArrayData: true})

    const handleClick = () => {
        navigate('/museum')
    }

    return (
        <Section title={'Музей'} subtitle={'Христианские ценности и народные традиции в семье'}>
            <div className={styles.container}>
                <Loader isLoading={isLoading}>
                    {items && items.length > 0 && <CarouselSlider items={items}/>}
                    <SectionButton title='Перейти к странице музея' onClick={handleClick}/>
                </Loader>
            </div>
        </Section>
    )
}

export default MuseumSection

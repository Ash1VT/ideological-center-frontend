import React from 'react'
import styles from './MuseumSection.module.scss'
import Section from '../section/Section'
import CarouselSlider from './carousel-slider/CarouselSlider'
import { CarouselSliderItem } from './carousel-slider/CarouselSlider.props'
import SectionButton from '../ui/section-button/SectionButton'

const MuseumSection = () => {
    const items: CarouselSliderItem[] = [
        {
            image: './images/museum/zal1.png',
            title: 'Зал «Святыни земли белорусской»',
            description: 'Экспозиция зала решает вопросы\
                         духовно-нравственного воспитания\
                         учащихся путем формирования у них\
                        интереса к христианскому наследию\
                        белорусского народа и уважительного\
                        отношения к святыням родного края.'
        },
        {
            image: './images/museum/zal2.png',
            title: 'Зал «Народные традиции в семье»',
            description: 'Экспозиция зала формирует представление\
                        о ценностях родного очага, раскрывает\
                        значение народных праздников, развивает\
                        интерес к культурному наследию\
                        белорусского народа.'
        },
        {
            image: './images/museum/zal3.png',
            title: 'Зал «Христианские ценности в семье»',
            description: 'Экспозиция зала раскрывает\
                        глубинный смысл христианских\
                        праздников, объединяющих семью.'
        },
        {
            image: './images/museum/zal4.png',
            title: 'Зал «Символы эпохи»',
            description: 'Экспозиция зала воспитывает патриота,\
                        гражданина\
                        Республики Беларусь, достойного\
                        героического прошлого белорусского народа.'
        },
        // {
        //     image: './images/test.jpg',
        //     title: 'Фотка 5',
        //     description: 'Музеи России'
        // },
        // {
        //     image: './images/test.jpg',
        //     title: 'Фотка 6',
        //     description: 'Музеи России'
        // }
    ]

    return (
        <Section title={'Музей'} subtitle={'Христианские ценности и народные традиции в семье'}>
            <div className={styles.container}>
                <CarouselSlider items={items}/>
                <SectionButton title='Перейти к странице музея' onClick={() => {}}/>
            </div>
        </Section>
    )
}

export default MuseumSection

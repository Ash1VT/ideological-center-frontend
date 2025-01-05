import React from 'react'
import PageHeader from 'src/components/page-header/PageHeader'
import styles from './MuseumPage.module.scss'
import CubeImageSlider from 'src/components/cube-image-slider/CubeImageSlider'
import classnames from 'classnames'
import MuseumSection from './museum-section/MuseumSection'
import { MuseumHallModel, MuseumSectionModel } from 'src/redux/models/museum'
import MuseumSectionsList from './museum-sections-list/MuseumSectionsList'

const MuseumPage = () => {
    const museumHalls: MuseumHallModel[] = [
        {
            id: 1,
            name: 'Зал «Святыни земли белорусской»',
            description: 'Экспозиция зала решает вопросы\
                         духовно-нравственного воспитания\
                         учащихся путем формирования у них\
                        интереса к христианскому наследию\
                        белорусского народа и уважительного\
                        отношения к святыням родного края.',
            imageUrl: './images/museum/zal1.png',
            sections: [
                {
                    id: 1,
                    name: 'В начале было слово',
                    description: 'Экспозиция зала решает вопросы\
                                 духовно-нравственного воспитания\
                                 учащихся путем формирования у них\
                                интереса к христианскому наследию\
                                белорусского народа и уважительного\
                                отношения к святыням родного края.',
                    imageUrl: './images/museum/zal112.png',
                    museumHallId: 1
                },
                {
                    id: 2,
                    name: 'Христианские праздники в семье',
                    description: 'Экспозиция зала формирует представление\
                                 о ценностях родного очага, раскрывает\
                                 значение народных праздников, развивает\
                                 интерес к культурному наследию\
                                 белорусского народа.',
                    imageUrl: './images/museum/zal212.png',
                    museumHallId: 1
                },
            ]
        },
        {
            id: 2,
            name: 'Зал «Народные традиции в семье»',
            description: 'Экспозиция зала формирует представление\
                         о ценностях родного очага, раскрывает\
                         значение народных праздников, развивает\
                         интерес к культурному наследию\
                         белорусского народа.',
            imageUrl: './images/museum/zal2.png',
            sections: [
                {
                    id: 1,
                    name: 'Зал «Святыни земли белорусской»',
                    description: 'Экспозиция зала решает вопросы\
                                 духовно-нравственного воспитания\
                                 учащихся путем формирования у них\
                                интереса к христианскому наследию\
                                белорусского народа и уважительного\
                                отношения к святыням родного края.',
                    imageUrl: './images/museum/zal1.png',
                    museumHallId: 2
                },
                {
                    id: 2,
                    name: 'Зал «Народные традиции в семье»',
                    description: 'Экспозиция зала формирует представление\
                                 о ценностях родного очага, раскрывает\
                                 значение народных праздников, развивает\
                                 интерес к культурному наследию\
                                 белорусского народа.',
                    imageUrl: './images/museum/zal2.png',
                    museumHallId: 2
                }
            ]
        }
    ]
    // const items = [
    //     {
    //         id: 1,
    //         imageUrl: './images/museum/zal1.png',
    //         title: 'Зал «Святыни земли белорусской»',
    //         description: 'Экспозиция зала решает вопросы\
    //                      духовно-нравственного воспитания\
    //                      учащихся путем формирования у них\
    //                     интереса к христианскому наследию\
    //                     белорусского народа и уважительного\
    //                     отношения к святыням родного края.'
    //     },
    //     {
    //         id: 2,
    //         imageUrl: './images/museum/zal2.png',
    //         title: 'Зал «Народные традиции в семье»',
    //         description: 'Экспозиция зала формирует представление\
    //                     о ценностях родного очага, раскрывает\
    //                     значение народных праздников, развивает\
    //                     интерес к культурному наследию\
    //                     белорусского народа.'
    //     },
    //     {
    //         id: 3,
    //         imageUrl: './images/museum/zal3.png',
    //         title: 'Зал «Христианские ценности в семье»',
    //         description: 'Экспозиция зала раскрывает\
    //                     глубинный смысл христианских\
    //                     праздников, объединяющих семью.'
    //     },
    //     {
    //         id: 4,
    //         imageUrl: './images/museum/zal4.png',
    //         title: 'Зал «Символы эпохи»',
    //         description: 'Экспозиция зала воспитывает патриота,\
    //                     гражданина\
    //                     Республики Беларусь, достойного\
    //                     героического прошлого белорусского народа.'
    //     },
    // ]

    const [selectedId, setSelectedId] = React.useState(1)
    const activeItem = museumHalls.find(item => item.id === selectedId)

    const handleSelect = (id: number) => {
        setSelectedId(id)
    }
    

    return (
        <div className={styles.container}>
            <PageHeader title='Музей' image='./images/museum/museum.jpeg'/>
            <div className={styles.content}>
                {activeItem &&
                    <div className={styles.museum}>
                        <div className={classnames(styles.section, styles.header)}>
                            <div className={styles.title}>
                                <h2>{activeItem.name}</h2>
                            </div>
                            <CubeImageSlider images={museumHalls} onSlideSelected={handleSelect}/>
                            <div className={styles.description}>
                                <p>{activeItem.description}</p>
                            </div>
                        </div>
                        <div className={classnames(styles.section, styles.museumSections)}>
                            <MuseumSectionsList title='Экспозиции зала' sections={activeItem.sections}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MuseumPage

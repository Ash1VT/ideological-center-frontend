import React, { useEffect, useState } from 'react'
import PageHeader from 'src/components/page-header/PageHeader'
import styles from './MuseumPage.module.scss'
import CubeImageSlider from 'src/components/cube-image-slider/CubeImageSlider'
import classnames from 'classnames'
import { MuseumHallModel, MuseumSectionModel } from 'src/models/museum'
import MuseumSectionsList from './museum-sections-list/MuseumSectionsList'
import MuseumService from 'src/services/MuseumService'
import Loader from 'src/components/loader/Loader'
import useFetchData from 'src/hooks/useFetchData'

const MuseumPage = () => {

    const {isLoading, data: museumHalls} = useFetchData<MuseumHallModel[]>(async () => {
        const data = await MuseumService.retrieveMuseumHalls()
        if (data.items.length !== 0) {
            setSelectedId(data.items[0].id)
        }
        return data.items
    }, [], {isArrayData: true})

    const [selectedId, setSelectedId] = useState<number | undefined>(undefined)
    const activeItem = museumHalls?.find(item => item.id === selectedId)

    const handleSelect = (id: number) => {
        setSelectedId(id)
    }

    return (
        <div className={styles.container}>
            <PageHeader title='Музей' image='/images/museum/museum.jpeg'/>
            <div className={styles.content}>
                <Loader isLoading={isLoading}>
                    {activeItem ? (
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
                        )
                        :
                        (
                            <div className={styles.no}>
                                <h2>Залов музея на данный момент нет</h2>
                            </div>
                        )
                    }
                </Loader>
            </div>
        </div>
    )
}

export default MuseumPage

import React, { useState } from 'react'
import Section from '../section/Section'
import styles from './LocationSection.module.scss'
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

const LocationSection = () => {
    return (
        <Section title='Локация' subtitle='Наше местонахождение'>
            <div className={styles.container}>
                <Map width={'100%'} height={500} defaultState={{
                        center: [53.64144, 23.853021],
                        zoom: 15.55
                }}>
                    <ZoomControl/>
                    <Placemark geometry={[53.641884, 23.852987]} 
                               options={{preset: 'islands#blueStretchyIcon', iconColor: '#FF0000', iconCaptionMaxWidth: '200px'}}
                               />
                </Map>
            </div>
        </Section>
    )
}

export default LocationSection

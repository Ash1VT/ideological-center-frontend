import React from 'react'
import Section from '../section/Section'
import styles from './PartnersSection.module.scss'
import { PartnersSectionProps } from './PartnersSection.props'
import Partner from './partner/Partner'

const PartnersSection = ({partners} : PartnersSectionProps) => {

    return (
        <Section title='Партнеры' subtitle='Наши партнеры'>
            <div className={styles.container}>
                <div className={styles.partners}>
                    {partners.map((partner, index) => {
                        return <Partner key={index} partner={partner} onNavigate={() => {}}/>
                    })}
                </div>
            </div>
        </Section>
    )
}

export default PartnersSection

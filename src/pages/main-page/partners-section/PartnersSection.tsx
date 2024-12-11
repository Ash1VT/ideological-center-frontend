import React from 'react'
import Section from '../section/Section'
import styles from './PartnersSection.module.scss'
import { PartnersSectionProps } from './PartnersSection.props'
import Partner from './partner/Partner'
import { useNavigate } from 'react-router-dom'

const PartnersSection = ({partners} : PartnersSectionProps) => {
    return (
        <Section title='Сотрудничество' subtitle='Наши партнеры'>
            <div className={styles.container}>
                <div className={styles.partners}>
                    {partners.map((partner, index) => {
                        return <Partner key={index} partner={partner}/>
                    })}
                </div>
            </div>
        </Section>
    )
}

export default PartnersSection

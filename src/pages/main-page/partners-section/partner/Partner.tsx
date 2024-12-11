import React from 'react'
import { PartnerProps } from './Partner.props'
import styles from './Partner.module.scss'

const Partner = ({partner} : PartnerProps) => {
    
    return (
        <div className={styles.container}>
            <a href={partner.link} target="_blank">
                <div className={styles.image}>
                    <img src={partner.image}/>
                </div>
                <div className={styles.content}>
                    <p>{partner.name}</p>
                </div>
            </a>
        </div>        
    )
}

export default Partner
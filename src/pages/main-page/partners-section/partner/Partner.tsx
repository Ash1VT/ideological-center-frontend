import React from 'react'
import { PartnerProps } from './Partner.props'
import styles from './Partner.module.scss'

const Partner = ({partner, onNavigate} : PartnerProps) => {
    const onPartnerClick = () => {
        onNavigate(partner.link)
    }
    
    return (
        <div className={styles.container} onClick={onPartnerClick}>
            <div className={styles.image}>
                <img src={partner.image}/>
            </div>
            <div className={styles.content}>
                <p>{partner.name}</p>
            </div>
        </div>        
    )
}

export default Partner
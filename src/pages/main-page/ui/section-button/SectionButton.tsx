import React from 'react'
import styles from './SectionButton.module.scss'
import { SectionButtonProps } from './SectionButton.types'

const SectionButton = ({title, onClick} : SectionButtonProps) => {
    return (
        <div className={styles.button}>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}

export default SectionButton

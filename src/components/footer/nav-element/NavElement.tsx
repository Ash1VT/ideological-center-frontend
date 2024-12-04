import React from 'react'
import styles from './NavElement.module.scss'
import { NavElementProps } from './NavElement.props'

const NavElement = ({item}: NavElementProps) => {
    return (
        <div className={styles.container}>
            <button>
                <a href={item.link}>{item.name}</a>
            </button>
        </div>
    )
}

export default NavElement

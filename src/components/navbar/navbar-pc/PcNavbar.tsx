import classnames from 'classnames'
import React from 'react'
import styles from './PcNavbar.module.scss'
import DropDown from '../dropdown/DropDown'
import { NavbarProps } from '../Navbar.types'


const PcNavbar = ({menuItems}: NavbarProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.menu}>
                {menuItems.map((item, index) => {
                    if (item.subitems) {
                        return (
                            <DropDown title={item.name} items={item.subitems} 
                                      triggerClassName={styles.title} 
                                      titleClassName={styles.title__font} 
                                      itemClassName={classnames(styles.subtitle, styles.subtitle__font)}/>
                        )
                    }
                    return (
                        <div key={index} className={classnames(styles.title, styles.title__font)}>{item.name}</div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default PcNavbar

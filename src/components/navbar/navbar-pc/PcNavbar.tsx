import classnames from 'classnames'
import React from 'react'
import styles from './PcNavbar.module.scss'
import DropDown from '../dropdown/DropDown'
import { NavbarProps } from '../Navbar.types'
import { useNavigate } from 'react-router-dom'


const PcNavbar = ({logo, menuItems}: NavbarProps) => {
    const navigate = useNavigate()

    const handleClick = (link: string) => {
        navigate(link)
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo}></img>
                </div>
                <div className={styles.menu}>
                    {menuItems.map((item, index) => {
                        if (item.subitems) {
                            return (
                                <DropDown title={item.name} 
                                        key={index}            
                                        items={item.subitems} 
                                        triggerClassName={styles.title} 
                                        titleClassName={styles.title__font} 
                                        itemClassName={classnames(styles.subtitle, styles.subtitle__font)}/>
                            )
                        }
                        return (
                            <div key={index} className={classnames(styles.title, styles.title__font)} onClick={() => handleClick(item.link)}>{item.name}</div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default PcNavbar

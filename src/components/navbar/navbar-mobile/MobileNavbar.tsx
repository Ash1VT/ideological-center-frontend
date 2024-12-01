import React, { useState } from 'react'
import styles from './MobileNavbar.module.scss'
import { NavbarProps } from '../Navbar.types'
import MenuIcon from '@mui/icons-material/Menu';
import DropDown from '../dropdown/DropDown';
import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

const MobileNavbar = ({menuItems} : NavbarProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const onMenuOpened = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <motion.div className={styles.burger} onClick={onMenuOpened}
                        animate={
                                { 
                                    rotate: isOpen ? -270 : 0 
                                }
                            }
                        transition={{ duration: 0.8 }}>
                <MenuIcon className={styles.icon}/>
            </motion.div>
            <AnimatePresence key={'mobile-menu'}>
                {isOpen && (
                    <motion.div 
                            className={styles.menu}
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1, transform: 'translateX(-100%)' }}
                            exit={{ opacity: 0,  transform: 'translateX(0)' }}
                            transition={{ duration: 0.5 }}>
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
                    </motion.div>    
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileNavbar

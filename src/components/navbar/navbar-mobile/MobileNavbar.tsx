import React, { useCallback, useState } from 'react'
import styles from './MobileNavbar.module.scss'
import { NavbarProps } from '../Navbar.types'
import MenuIcon from '@mui/icons-material/Menu';
import DropDown from '../dropdown/DropDown';
import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import useOutsideClick from 'src/hooks/useOutsideClick';
import { useNavigate } from 'react-router-dom';

const MobileNavbar = ({logo, menuItems} : NavbarProps) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    
    const onMenuOpened = () => {
        setIsOpen(!isOpen);
    }

    const handleClick = (link: string) => {
        setIsOpen(false);
        navigate(link);
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo}></img>
                </div>
                <motion.div className={styles.burger} onClick={onMenuOpened}
                            animate={
                                    { 
                                        rotate: isOpen ? -270 : 0 
                                    }
                                }
                            transition={{ duration: 0.8 }}>
                    <MenuIcon className={styles.icon}/>
                </motion.div>
            </div>
            <AnimatePresence key={'mobile-menu'}>
                {isOpen && (
                    <>
                        <motion.div 
                                className={styles.menu}
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1, transform: 'translateX(-100%)' }}
                                exit={{ opacity: 0,  transform: 'translateX(0)' }}
                                transition={{ duration: 0.5 }}>
                            {menuItems.map((item, index) => {
                                if (item.subitems) {
                                    return (
                                        <DropDown key={index} title={item.name} items={item.subitems} 
                                                triggerClassName={styles.title} 
                                                titleClassName={styles.title__font} 
                                                itemClassName={classnames(styles.subtitle, styles.subtitle__font)}
                                                onItemClick={handleClick}
                                                />
                                    )
                                }
                                return (
                                    <div key={`rqweqeqe-${index}`} className={classnames(styles.title, styles.title__font)} onClick={() => handleClick(item.link)}>{item.name}</div>
                                )
                            }
                            )}
                        </motion.div>
                        <motion.div 
                                    onClick={() => setIsOpen(false)}
                                    className={styles.overlay}
                                    initial={{ opacity: 0}} 
                                    animate={{ opacity: 1 }} 
                                    exit={{ opacity: 0 }}/> 
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileNavbar

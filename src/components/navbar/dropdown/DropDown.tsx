import React, { useState } from 'react';
import styles from './DropDown.module.scss';
import { DropDownProps } from './DropDown.types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import useOutsideClick from 'src/hooks/useOutsideClick';

const DropDown = ({ title, items, triggerClassName, titleClassName, itemContainerClassName,itemClassName, iconClassName } : DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const ref = useOutsideClick<HTMLDivElement>(() => {
      setIsOpen(false);
  })

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  return (
      <div className={styles.container} ref={ref}>
          <div className={classnames(styles.trigger, triggerClassName)} onClick={toggleDropdown}>
              <div className={titleClassName}>{title}</div> 
              <KeyboardArrowDownIcon className={classnames(styles.icon, iconClassName, isOpen ? styles.open : '')}/>
          </div>
          <AnimatePresence key={'dropdown'}>

            {isOpen && (
                <motion.div 
                    className={styles.menu}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {items.map((item, index) => (
                      <motion.div key={index} 
                                  className={classnames(styles.item, itemContainerClassName)}
                                  initial = {{ opacity: 0, height: 0, scale: 0.8 }}
                                  animate = {{ opacity: 1, height: 'auto', scale: 1 }}
                                  exit = {{ opacity: 0, height: 0 }}
                                  transition = {{ eduration: 0.5, delay: isOpen ? index * 0.1 : 0 }}>
                        <a href={item.link} 
                           className={classnames(styles.link, itemClassName)}>
                          {item.name}
                        </a>
                      </motion.div>
                    ))}
                </motion.div>

            )}
        </AnimatePresence>

      </div>
  );
};

export default DropDown;
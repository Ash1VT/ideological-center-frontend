import React from 'react'
import styles from './AboutUsSection.module.scss'
import Section from '../section/Section'
import { motion } from 'framer-motion'

const AboutUsSection = () => {
    return (
        <Section title='О нас' subtitle='Ресурсный центр'>
            <div className={styles.container}>
                <div className={styles.images}>
                    <motion.div className={styles.image}
                                initial={{ opacity: 0, transform: 'translateX(-100px)' }}
                                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5}}>
                        <img src='./images/about/1.jpg'/>
                    </motion.div>
                    <motion.div className={styles.image}
                                initial={{ opacity: 0, transform: 'translateX(100px)' }}
                                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5}}>
                        <img src='./images/about/2.jpg'/>
                    </motion.div>
                </div>
                <motion.p
                    initial={{ opacity: 0, translateY: -50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                        >Работа ресурсного центра способствует 
                          воспитанию у школьников высоких нравственных качеств, 
                          создает условия для формирования и дальнейшего развития 
                          мировоззрения подрастающего поколения, расширяет 
                          педагогический опыт в направлении духовно-нравственного 
                          воспитания на христианских ценностях и традициях 
                          белорусского народа, а также содействует укреплению 
                          сотрудничества Гродненской епархии 
                          Белорусской Православной Церкви и системы образования 
                          Октябрьского района города Гродно в наше время, 
                          когда перед педагогами и священнослужителями стоит 
                          задача не просто воспитать человека, а вложить в него, 
                          помимо знаний, любовь к Отечеству, научить доброте, 
                          терпимости, умению жить в гармонии с собой и другими людьми.
                </motion.p>
                
            </div>
        </Section>
    )
}

export default AboutUsSection

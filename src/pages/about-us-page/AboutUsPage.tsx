import React from 'react'
import styles from './AboutUsPage.module.scss'
import PageHeader from 'src/components/page-header/PageHeader'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CroppedBorder from './ui/cropped-border/CroppedBorder'

const AboutUsPage = () => {
    return (
        <div className={styles.container}>
            <PageHeader title='О нас' image='/images/about/about_us.png'/>
            <div className={styles.content}>
                <div className={styles.about}>
                    <CroppedBorder className={styles.border}/>
                    <motion.div className={styles.title}
                         initial={{ opacity: 0, scale: 0.8 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5 }}>
                            <h3>Деятельность</h3>
                    </motion.div>
                    <motion.div className={styles.activity}
                                initial={{ opacity: 0, scale: 0.8, transform: 'translateX(-100px)' }}
                                whileInView={{ opacity: 1, scale: 1, transform: 'translateX(0px)' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}>
                        <p>
                            <strong className={styles.subtitle}>Ресурсный центр</strong> представляет собой уникальную площадку, объединяющую усилия педагогов, священнослужителей и всех заинтересованных в воспитании 
                            высоконравственного и гармонично развитого поколения.
                            <br/> 
                            <br/>
                            <strong className={styles.subtitle}>Наша деятельность</strong> направлена на создание благоприятных условий для формирования и укрепления у подрастающего поколения жизненных ориентиров, 
                            основанных на христианских ценностях, традициях белорусского народа и духовно-нравственных идеалах.
                            Мы верим, что воспитание человека – это не только передача знаний, но и развитие таких качеств, как доброта, терпимость, любовь к своему Отечеству, 
                            уважение к себе и окружающим. Работа ресурсного центра помогает школьникам осознать важность этих ценностей, способствует формированию у них 
                            ответственного отношения к своей жизни и жизни общества.
                        </p>
                    </motion.div>
                    <motion.div className={styles.values}
                                initial={{ opacity: 0, scale: 0.8, transform: 'translateX(100px)' }}
                                whileInView={{ opacity: 1, scale: 1, transform: 'translateX(0px)' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}>
                        <p>
                            <strong className={styles.subtitle}>Особое внимание</strong>  мы уделяем укреплению сотрудничества между Гродненской епархией Белорусской Православной Церкви и 
                            образовательной системой Октябрьского района города Гродно. Наши проекты и инициативы открывают новые возможности для обмена опытом между педагогами, 
                            развития духовного образования и воспитания детей.
                            <br/>
                            <br/>
                            В условиях современных вызовов, стоящих перед обществом, мы стремимся поддерживать учителей и родителей в их благородной миссии воспитания, 
                            предоставляя ресурсы, методические рекомендации и практические инструменты для работы с детьми. Мы гордимся тем, что наш центр стал местом, 
                            где объединяются усилия для достижения общей цели – воспитания личности, способной жить в гармонии с собой, другими людьми и окружающим миром.
                        </p>
                    </motion.div>
                    <motion.div className={styles.welcome}
                                initial={{ opacity: 0, scale: 0.8}}
                                whileInView={{ opacity: 1, scale: 1}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}>
                        <CroppedBorder className={styles.border}/>
                        <p>
                            Добро пожаловать в ресурсный центр – место, где традиции встречаются с современностью, а духовность становится основой будущего!
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage
  
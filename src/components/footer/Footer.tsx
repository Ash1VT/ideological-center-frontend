import React from 'react'
import styles from './Footer.module.scss'
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contacts}>
                    <h3 className={styles.title}>Контакты</h3>
                    <p className={styles.email}>belko.angelina@mail.ru</p>
                    <p className={styles.phone}>+375 (29) 456-78-90</p>
                </div>
                <div className={styles.social}>
                    <button className={styles.button}>
                        <InstagramIcon/>
                    </button>
                    <button className={styles.button}>
                        <FacebookIcon/>
                    </button>
                    <button className={styles.button}>
                        <YouTubeIcon/>
                    </button>
                    <button className={styles.button}>
                        <TelegramIcon/>
                    </button>
                </div>
                <div className={styles.navlist}>
                    <div className={styles.navblock}>
                        <h3>Навигация</h3>
                        <ul>
                            <li>
                                <Link to={'/'}>Главная</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>О нас</Link>
                            </li>
                            <li>
                                <Link to={'/events'}>Афиша событий</Link>
                            </li>
                            <li>
                                <Link to={'/museum'}>Музей</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navblock}>
                        <h3>Библиотека</h3>
                        <ul>
                            <li>
                                <Link to={'/normdocs'}>Нормативные документы</Link>
                            </li>
                            <li>
                                <Link to={'/methodocs'}>Методические документы</Link>
                            </li>
                            <li>
                                <Link to={'/studymaterials'}>Обучающие материалы</Link>
                            </li>
                            <li>
                                <Link to={'/presentations'}>Презентации</Link>
                            </li>
                            <li>
                                <Link to={'/photovideo'}>Фото и видео</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                    <div className={styles.copyright__year}>
                        <CopyrightIcon/>
                        <p className={styles.year}>2024 - 2025</p>
                    </div>
                    <p className={styles.text}>
                        Ресурсный центр
                        по духовно-нравственному и патриотическому
                        воспитанию молодёжи
                    </p>
            </div>
        </div>
    )
}

export default Footer

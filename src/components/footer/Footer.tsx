import React from 'react'
import styles from './Footer.module.scss'
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contacts}>
                    <h3 className={styles.title}>Контакты</h3>
                    <p className={styles.email}>hello@example.com</p>
                    <p className={styles.phone}>+7 (123) 456-78-90</p>
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
                                <a href="#">Главная</a>
                            </li>
                            <li>
                                <a href="#">О нас</a>
                            </li>
                            <li>
                                <a href="#">Афиша событий</a>
                            </li>
                            <li>
                                <a href="#">Партнеры</a>
                            </li>
                            <li>
                                <a href="#">Музей</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navblock}>
                        <h3>Библиотека</h3>
                        <ul>
                            <li>
                                <a href="#">Нормативные документы</a>
                            </li>
                            <li>
                                <a href="#">Методические документы</a>
                            </li>
                            <li>
                                <a href="#">Обучающие материалы</a>
                            </li>
                            <li>
                                <a href="#">Презентации</a>
                            </li>
                            <li>
                                <a href="#">Фото и видео</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                    <CopyrightIcon/>
                    <p className={styles.year}>2024</p>
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

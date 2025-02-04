import React from 'react'
import styles from './NotFoundPage.module.scss'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.background}>
                    <h1>404</h1>
                </div>
                <div className={styles.title}>
                    <h2>Страница не найдена!</h2>
                </div>
                <div className={styles.description}>
                    <p>Страница, которую вы ищете, могла быть удалена из-за изменения ее названия или временно недоступна.</p>
                </div>
                <div className={styles.link}>
                    <Link to={'/'}>Вернуться на главную</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage

import React from 'react'
import styles from './MainPage.module.scss'
import BirdBackground from './bird-background/BirdBackground'
import Navbar from 'src/components/navbar/Navbar'


const MainPage = () => {
    const navbarMenuItems = [
            {name: 'Новости', link: ''},
            {name: 'Мероприятия', link: ''},
            {name: 'Статьи', link: ''},
            {name: 'Музей', link: ''},
            {name: 'Документы', link: '', subitems: [
                {name: 'Методические документы', link: ''},
                {name: 'Презентации', link: ''},
                {name: 'Видео', link: ''},
            ]}
    ]

    return (
        <div className={styles.container}>
            <Navbar menuItems={navbarMenuItems}/>
            <BirdBackground/>
            <BirdBackground/>
            <BirdBackground/>
        </div>
    )
}

export default MainPage

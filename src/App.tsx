import React from 'react';
import Calendar from './pages/events-page/events-calendar/Calendar';
import styles from './styles/App.module.scss'
import EventsCard from './pages/events-page/events-calendar/events-card/EventsCard';
import MainPage from './pages/main-page/MainPage';
import { slide as Menu } from 'react-burger-menu'
import { YMaps, Map } from 'react-yandex-maps';
import EventsPage from './pages/events-page/EventsPage';
import EventPage from './pages/event-page/EventPage';
import AppRouter from './AppRouter';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { HashRouter } from 'react-router-dom';

function App() {
    const navbarMenuItems = [
        {name: 'Главная', link: '/'},
        {name: 'О нас', link: ''},
        {name: 'Афиша событий', link: '/events'},
        // {name: 'Партнеры', link: ''},
        {name: 'Музей', link: ''},
        {name: 'Библиотека', link: '', subitems: [
            {name: 'Нормативные документы', link: '/normdocs'},
            {name: 'Методические документы', link: '/methodocs'},
            {name: 'Обучающие материалы', link: '/studymaterials'},
            {name: 'Презентации', link: '/presentations'},
            {name: 'Фото и видео', link: '/photovideo'},
        ]}
    ]

    return (
        <YMaps query={{load: "package.full", apikey: process.env.YANDEX_MAPS_API_KEY}}>
            <HashRouter>
                <div className={styles.container}>
                    <Navbar logo='./images/logo.png' menuItems={navbarMenuItems}/>
                    <AppRouter/>
                    <Footer/>
                </div>
            </HashRouter>
        </YMaps>
    );
}

export default App;
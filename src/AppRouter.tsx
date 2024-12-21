import React from 'react'
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import EventsPage from './pages/events-page/EventsPage'
import EventPage from './pages/event-page/EventPage'

const AppRouter = () => {
    const navbarMenuItems = [
        {name: 'Главная', link: '/'},
        {name: 'О нас', link: ''},
        {name: 'Афиша событий', link: '/events'},
        // {name: 'Партнеры', link: ''},
        {name: 'Музей', link: ''},
        {name: 'Библиотека', link: '', subitems: [
            {name: 'Нормативные документы', link: ''},
            {name: 'Методические документы', link: ''},
            {name: 'Обучающие материалы', link: ''},
            {name: 'Презентации', link: ''},
            {name: 'Фото и видео', link: ''},
        ]}
    ]

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage navbarItems={navbarMenuItems}/>} />
                <Route path="/events" element={<EventsPage navbarItems={navbarMenuItems}/>} />
                <Route path="/events/:id" element={<EventPage navbarItems={navbarMenuItems}/>} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter

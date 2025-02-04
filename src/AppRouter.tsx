import { Route, Routes, ScrollRestoration } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import EventsPage from './pages/events-page/EventsPage'
import EventPage from './pages/event-page/EventPage'
import MediaPage from './pages/media-page/MediaPage'
import MediaSinglePage from './pages/media-single-page/MediaSinglePage'
import AboutUsPage from './pages/about-us-page/AboutUsPage'
import MuseumPage from './pages/museum-page/MuseumPage'
import NotFoundPage from './pages/not-found-page/NotFoundPage'

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about" element={<AboutUsPage/>} />
            <Route path="/museum" element={<MuseumPage/>} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventPage/>} />
            <Route path="/:mediaTypeSlug" element={<MediaPage />} />
            <Route path="/:mediaTypeSlug/:mediaId" element={<MediaSinglePage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRouter

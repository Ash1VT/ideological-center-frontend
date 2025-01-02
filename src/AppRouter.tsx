import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import EventsPage from './pages/events-page/EventsPage'
import EventPage from './pages/event-page/EventPage'
import MediaPage from './pages/media-page/MediaPage'
import MediaSinglePage from './pages/media-single-page/MediaSinglePage'
import AboutUsPage from './pages/about-us-page/AboutUsPage'
import MuseumPage from './pages/museum-page/MuseumPage'

const AppRouter = () => {


    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about" element={<AboutUsPage/>} />
            <Route path="/museum" element={<MuseumPage/>} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventPage/>} />
            
            <Route path="/:mediaTypeSlug" element={<MediaPage />} />
            <Route path="/:mediaTypeSlug/:mediaId" element={<MediaSinglePage />} />
            {/* <Route path="/normdocs" element={<NormDocumentsPage />} />
            
            <Route path="/methodocs" element={<MethodicDocumentsPage />} />
            <Route path="/methodocs/:id" element={<MethodicDocumentPage />} />

            <Route path="/studymaterials" element={<StudyMaterialsPage />} />
            <Route path="/photovideo" element={<PhotosVideosPage />} />
            <Route path="/presentations" element={<PresentationsPage />} /> */}

        </Routes>
    )
}

export default AppRouter

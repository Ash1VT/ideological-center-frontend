import React from 'react'
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import EventsPage from './pages/events-page/EventsPage'
import EventPage from './pages/event-page/EventPage'
import NormDocumentsPage from './pages/media/norm/norm-documents-page/NormDocumentsPage'
import PresentationsPage from './pages/presentations-page/PresentationsPage'
import PhotosVideosPage from './pages/photos-videos-page/PhotosVideosPage'
import StudyMaterialsPage from './pages/media/study/study-materials-page/StudyMaterialsPage'
import MethodicDocumentsPage from './pages/media/methodic/methodic-documents-page/MethodicDocumentsPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventPage/>} />
            <Route path="/normdocs" element={<NormDocumentsPage />} />
            <Route path="/methodocs" element={<MethodicDocumentsPage />} />
            <Route path="/studymaterials" element={<StudyMaterialsPage />} />
            <Route path="/photovideo" element={<PhotosVideosPage />} />
            <Route path="/presentations" element={<PresentationsPage />} />

        </Routes>
    )
}

export default AppRouter

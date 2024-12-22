import React from 'react'
import styles from './NormDocumentsPage.module.scss'
import Navbar from 'src/components/navbar/Navbar'
import PageHeader from 'src/components/page-header/PageHeader'
import Footer from 'src/components/footer/Footer'
import { PageProps } from '../../../Page.props'
import MediaCard from 'src/components/media-section/media-card/MediaCard'
import { useSelector } from 'react-redux'
import { Root } from 'react-dom/client'
import { RootState } from 'src/redux/store'
import MediaList from 'src/components/media-section/media-list/MediaList'
import MediaSearch from 'src/components/media-section/media-search/MediaSearch'
import MediaCategoriesList from 'src/components/media-section/media-categories-list/MediaCategoriesList'
import MediaHeader from 'src/components/media-section/media-header/MediaHeader'
import MediaSection from 'src/components/media-section/MediaSection'

const NormDocumentsPage = () => {
    const documents = useSelector((state: RootState) => state.mediaReducer.media)
    const documentCategories = useSelector((state: RootState) => state.mediaCategoriesReducer.mediaCategories)

    return (
        <div className={styles.container}>
            <PageHeader title='Нормативные документы' image='./images/pages/norm.jpg'/>
            <div className={styles.documents}>
                <MediaSection categoriesTitle='Категории' categories={documentCategories} media={documents} onShowMore={async () => {}}/>
            </div>
        </div>
    )
}

export default NormDocumentsPage

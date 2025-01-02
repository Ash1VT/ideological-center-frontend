import React, { useEffect } from 'react'
import styles from './MediaPage.module.scss'
import PageHeader from 'src/components/page-header/PageHeader'
import MediaSection from 'src/components/media-section/MediaSection'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import { mediaTypes } from 'src/constants/media'


const MediaPage = () => {
    const { mediaTypeSlug } = useParams()
    const navigate = useNavigate()

    const documents = useSelector((state: RootState) => state.mediaReducer.media)
    const documentCategories = useSelector((state: RootState) => state.mediaCategoriesReducer.mediaCategories)

    const mediaType = mediaTypes.find(m => m.slug === mediaTypeSlug)

    useEffect(() => {
        //fetch
    }, [])

    const onMediaClick = (id: number) => {
        navigate(`/${mediaTypeSlug}/${id}`)
    }

    if (!mediaType) {
        return <div>404</div>
    }

    return (
        <div className={styles.container}>
            <PageHeader title={mediaType.headerTitle} image={mediaType.headerImage}/>
            <div className={styles.documents}>
                <MediaSection categoriesTitle={mediaType.categoriesTitle} categories={documentCategories} media={documents} onMediaClick={onMediaClick} onShowMore={async () => {}}/>
            </div>
        </div>
    )
}

export default MediaPage

import React, { useCallback } from 'react'
import PageHeader from 'src/components/page-header/PageHeader'
import CommonCard from './common-card/CommonCard'
import styles from './MediaSinglePage.module.scss'
import { MediaModel, MediaType } from 'src/models/media'
import { useParams } from 'react-router-dom'
import { mediaTypes } from 'src/constants/media'
import PhotosCard from './photos-card/PhotosCard'
import VideoCard from './video-card/VideoCard'
import MediaService from 'src/services/MediaService'
import useFetchData from 'src/hooks/useFetchData'
import Loader from 'src/components/loader/Loader'
import NotFoundPage from '../not-found-page/NotFoundPage'

const MediaSinglePage = () => {
    const { mediaTypeSlug, mediaId } = useParams()
    
    const mediaType = mediaTypes.find(m => m.slug === mediaTypeSlug)
    
    const {isLoading: isMediaLoading, data: media} = useFetchData<MediaModel | null>(async () => {
        const data = await MediaService.retrieveMediaById(parseInt(mediaId!))
        return data
    }, [mediaId])
    
    const getMediaCard = useCallback((media: MediaModel) => {
        if (media.type === MediaType.METHODIC) {
            return <CommonCard document={media} descriptionTitle='Описание документа' buttonLabel='Скачать документ'/>
        }

        if (media.type === MediaType.NORM) {
            return <CommonCard document={media} descriptionTitle='Описание документа' buttonLabel='Скачать документ'/>
        }

        if (media.type === MediaType.STUDY) {
            return <CommonCard document={media} descriptionTitle='Описание сборника' buttonLabel='Скачать сборник'/>
        }

        if (media.type === MediaType.PHOTO) {
            return <PhotosCard photos={media} descriptionTitle='Описание коллекции фотографий' buttonLabel='Скачать все фотографии'/>
        }

        if (media.type === MediaType.VIDEO) {
            return <VideoCard video={media}/>
        }

        if (media.type === MediaType.PRESENTATION) {
            return <CommonCard document={media} descriptionTitle='Описание презентации' buttonLabel='Скачать презентацию'/>
        }
        
        return null;
    }, [media])


    if (!mediaType) {
        return <NotFoundPage/>
    }

    if (!isMediaLoading && (!media)){
        return <NotFoundPage/>
    }

    return (
        <div className={styles.container}>
            <Loader isLoading={isMediaLoading}>
                {media && 
                    <>
                        <PageHeader title={media?.name} image={mediaType.headerImage}/>
                        <div className={styles.media}>
                            {getMediaCard(media)}
                        </div>
                    </>
                }
            </Loader>
        </div>
    )
}

export default MediaSinglePage

import React, { useCallback } from 'react'
import PageHeader from 'src/components/page-header/PageHeader'
import CommonCard from './common-card/CommonCard'
import styles from './MediaSinglePage.module.scss'
import { MediaModel, MediaType } from 'src/redux/models/media'
import { useParams } from 'react-router-dom'
import { mediaTypes } from 'src/constants/media'
import PhotosCard from './photos-card/PhotosCard'
import VideoCard from './video-card/VideoCard'

const MediaSinglePage = () => {
    const { mediaTypeSlug, mediaId } = useParams()
    
    const mediaType = mediaTypes.find(m => m.slug === mediaTypeSlug)
    
    const media: MediaModel = {
        id: 1,
        name: "Методика документа",
        description: "Методика документа Методика документа Методика документа Методика документа Методика документа Методика документа Методика документа Методика документа Методика документа Методика документа Методика документа Методика документаМетодика документа Методика документа Методика документа Методика документа Методика документа Методика документа",
        image: "./images/documents/doc-blue.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        // link: "./test.mp4",
        type: MediaType.PRESENTATION,
        photoImages: [
            {
                id: 1,
                image: './images/documents/doc-blue.jpg'
            },
            {
                id: 2,
                image: './images/documents/doc-blue.jpg'
            }
        ]
    }

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


    if (!mediaType || !media || !getMediaCard(media)) {
        return <div>404</div>
    }

    

    return (
        <div className={styles.container}>
            <PageHeader title={media.name} image={mediaType.headerImage}/>
            <div className={styles.media}>
                {getMediaCard(media)}
            </div>
        </div>
    )
}

export default MediaSinglePage

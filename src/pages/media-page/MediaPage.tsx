import React, { useEffect, useState } from 'react'
import styles from './MediaPage.module.scss'
import PageHeader from 'src/components/page-header/PageHeader'
import MediaSection from 'src/components/media-section/MediaSection'
import { useNavigate, useParams } from 'react-router-dom'
import { mediaTypes } from 'src/constants/media'
import { MediaCategoryModel, MediaModel } from 'src/models/media'
import MediaService from 'src/services/MediaService'
import usePaginator from 'src/hooks/usePaginator'
import Loader from 'src/components/loader/Loader'
import useFetchData from 'src/hooks/useFetchData'
import NotFoundPage from '../not-found-page/NotFoundPage'

const MediaPage = () => {
    const { mediaTypeSlug } = useParams()
    const navigate = useNavigate()

    const [selectedCategoryId, setSelectedCategoryId] = React.useState<number | undefined>(undefined)
    const {page, perPage, nextPage, prevPage} = usePaginator(1, 20)
    const [totalMediaCount, setTotalMediaCount] = useState(0)
    const [search, setSearch] = useState('')

    const {isLoading: isCategoriesLoading, data: categories} = useFetchData<MediaCategoryModel[]>(async () => {
        const data = await MediaService.retrieveMediaCategories(undefined, undefined, mediaTypeSlug)

        return data.items
    }, [mediaTypeSlug], {isArrayData: true})

    const {isLoading: isMediaLoading, data: media, fetchAdditional: fetchAdditionalMedia} = useFetchData<MediaModel[]>(async () => {
        const data = await MediaService.retrieveMedia(page, perPage, selectedCategoryId, mediaTypeSlug, search)
        setTotalMediaCount(data.totalFilteredCount)
        return data.items
    }, [mediaTypeSlug, selectedCategoryId, search], {isArrayData: true})

    const mediaType = mediaTypes.find(m => m.slug === mediaTypeSlug)



    const onMediaCategoryClick = async (id: number) => {
        if (selectedCategoryId === id) {
            setSelectedCategoryId(undefined)
            return
        } 
        setSelectedCategoryId(id)
    }

    const onMediaClick = async (id: number) => {
        navigate(`/${mediaTypeSlug}/${id}`)
    }

    const onMediaSearch = async (value: string) => {
        setSearch(value)
    }

    const onShowMoreClick = async () => {
        if (totalMediaCount === media.length) {
            return
        }

        nextPage()
        fetchAdditionalMedia?.()
    }

    if (!mediaType) {
        return <NotFoundPage/>
    }

    return (
        <div key={mediaType.slug} className={styles.container}>
            <PageHeader title={mediaType.headerTitle} image={mediaType.headerImage}/>
                <div className={styles.documents}>
                    {/* <Loader isLoading={categoriesLoading || isMediaLoading}> */}
                        <MediaSection categoriesTitle={mediaType.categoriesTitle} 
                                    categories={categories} 
                                    selectedCategoryId={selectedCategoryId} 
                                    media={media} 
                                    searchValue={search}
                                    showMoreButtonVisible={!isMediaLoading && media.length < totalMediaCount}
                                    isCategoriesLoading={isCategoriesLoading}
                                    isMediaLoading={isMediaLoading}
                                    onMediaClick={onMediaClick} 
                                    onMediaCategoryClick={onMediaCategoryClick} 
                                    onMediaSearch={onMediaSearch}
                                    onShowMore={onShowMoreClick}/>
                    {/* </Loader> */}
                </div>
        </div>
    )
}

export default MediaPage

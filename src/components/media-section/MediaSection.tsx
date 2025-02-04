import React from 'react'
import styles from './MediaSection.module.scss'
import { MediaSectionProps } from './MediaSection.props'
import MediaHeader from './media-header/MediaHeader'
import MediaCategoriesList from './media-categories-list/MediaCategoriesList'
import MediaSearch from './media-search/MediaSearch'
import MediaList from './media-list/MediaList'
import MediaShowButton from './media-show-button/MediaShowButton'
import Loader from '../loader/Loader'

const MediaSection = ({categoriesTitle, categories, selectedCategoryId, media, searchValue, showMoreButtonVisible, isCategoriesLoading, isMediaLoading, onMediaClick, onMediaCategoryClick, onMediaSearch, onShowMore} : MediaSectionProps) => {
    return (
        <div className={styles.container}>
            {categoriesTitle && categories.length > 0 &&
                <MediaHeader title={categoriesTitle}/>
            }
            <Loader isLoading={isCategoriesLoading}>
                {categories.length > 0 && 
                    <MediaCategoriesList categories={categories} selectedCategoryId={selectedCategoryId} onMediaCategoryClick={onMediaCategoryClick}/> 
                }
            </Loader>
            <MediaSearch searchValue={searchValue} onMediaSearch={onMediaSearch}/>
            <Loader isLoading={isMediaLoading}>
                {media.length > 0 ? 
                    <MediaList media={media} onMediaClick={onMediaClick}/>
                    :
                    <div className={styles.empty}>
                        <h2>Ничего не найдено</h2>
                    </div>
                }
            </Loader>
            {showMoreButtonVisible && <MediaShowButton title='Показать еще' onShow={onShowMore}/>}
        </div>
    )
}

export default MediaSection

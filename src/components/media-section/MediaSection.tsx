import React from 'react'
import styles from './MediaSection.module.scss'
import { MediaSectionProps } from './MediaSection.props'
import MediaHeader from './media-header/MediaHeader'
import MediaCategoriesList from './media-categories-list/MediaCategoriesList'
import MediaSearch from './media-search/MediaSearch'
import MediaList from './media-list/MediaList'
import MediaShowButton from './media-show-button/MediaShowButton'

const MediaSection = ({categoriesTitle, categories, media, onMediaClick, onShowMore} : MediaSectionProps) => {
    return (
        <div className={styles.container}>
            {categoriesTitle && <MediaHeader title={categoriesTitle}/>}
            {categories.length > 0 && <MediaCategoriesList categories={categories}/>}
            <MediaSearch/>
            <MediaList media={media} onMediaClick={onMediaClick}/>
            <MediaShowButton title='Показать еще' onShow={onShowMore}/>
        </div>
    )
}

export default MediaSection

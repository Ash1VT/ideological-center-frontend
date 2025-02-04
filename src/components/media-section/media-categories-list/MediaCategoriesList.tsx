import React from 'react'
import { MediaCategoriesProps } from './MediaCategoriesList.props'
import styles from './MediaCategoriesList.module.scss'
import MediaCategory from '../media-category/MediaCategory'

const MediaCategoriesList = ({categories, selectedCategoryId, onMediaCategoryClick} : MediaCategoriesProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {categories.map((category) => (
                    <MediaCategory key={category.id} category={category} isCategorySelected={category.id === selectedCategoryId} 
                                   onMediaCategoryClick={async () => await onMediaCategoryClick(category.id)}/>
                ))}
            </div>
        </div>
    )
}

export default MediaCategoriesList

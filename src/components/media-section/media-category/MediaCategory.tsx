import React from 'react'
import { MediaCategoryProps } from './MediaCategory.props'
import styles from './MediaCategory.module.scss'
import classnames from 'classnames'

const MediaCategory = ({category, isCategorySelected, onMediaCategoryClick}: MediaCategoryProps) => {
    const containerClass = isCategorySelected ? classnames(styles.container, styles.selected) : styles.container

    return (
        <div className={containerClass} onClick={onMediaCategoryClick}>
            <p>{category.name}</p>
        </div>
    )
}

export default MediaCategory

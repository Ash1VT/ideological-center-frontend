import React from 'react'
import { MediaCategoryProps } from './MediaCategory.props'
import styles from './MediaCategory.module.scss'

const MediaCategory = ({category}: MediaCategoryProps) => {
    return (
        <div className={styles.container}>
            <p>{category.name}</p>
        </div>
    )
}

export default MediaCategory

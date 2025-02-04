import React from 'react'
import styles from './Loader.module.scss'
import { LoaderProps } from './Loader.props'
import { Atom } from 'react-loading-indicators'

const Loader = ({isLoading, children} : LoaderProps) => {
    return (
        <>
            {isLoading 
                ? 
                <div className={styles.loader}>
                    <Atom size='large' color={'#007bff'}/>
                    <p>Загрузка...</p>
                </div> 
                : 
                children
            }
        </>    
    )
}

export default Loader

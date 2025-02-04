import React from 'react'
import { PhotosCardProps } from './PhotosCard.props'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './PhotosCard.module.scss'
// Import Swiper styles
import './swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DownloadButton from '../ui/download-button/DownloadButton';

const PhotosCard = ({photos, descriptionTitle, buttonLabel} : PhotosCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={photos.imageUrl}></img>
                </div>
                <div className={styles.title}>
                    <p>{descriptionTitle}</p>
                </div>
                <div className={styles.description}>
                    <p>{photos.description}</p>
                </div>
            </div>
            <Swiper
                className={styles.swiper}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination
                onSwiper={() => console.log('Test')}
                onSlideChange={() => console.log('slide change')}
                >
                    {photos.photos?.map((photoImage) => {
                        return (
                            <SwiperSlide key={photoImage.id} className={styles.slide}>
                                <div className={styles.image}>
                                    <img src={photoImage.imageUrl}/>
                                </div>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            <DownloadButton name={photos.name} title={buttonLabel} link={photos.url}/>
        </div>
    )
}

export default PhotosCard

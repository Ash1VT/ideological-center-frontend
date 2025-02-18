import React, { useState } from 'react'
import { PhotosCardProps } from './PhotosCard.props'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide, useSwiper } from 'swiper/react'
import Swiper from 'swiper';
import './PhotosCard.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Swiper.scss';
import DownloadButton from '../ui/download-button/DownloadButton';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ChangeSlide from 'src/components/change-slide/ChangeSlide';

const PhotosCard = ({photos, descriptionTitle, buttonLabel} : PhotosCardProps) => {
    const [curPhoto, setCurPhoto] = useState(0)


    return (
        <div className='photos_card_container'>
            <div className='photos_card_content'>
                {/* <div className='image'>
                    <img src={photos.imageUrl}></img>
                </div> */}
                <div className='photos_card_title'>
                    <p>{descriptionTitle}</p>
                </div>
                <div className='photos_card_description'>
                    <p>{photos.description}</p>
                </div>
            </div>
            <PhotoProvider onIndexChange={(index, state) => {
                setCurPhoto(index)
            }}>
                <SwiperComponent
                    className='photos_card_swiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination
                    onSwiper={() => console.log('Test')}
                    onSlideChange={(swiper: Swiper) => {setCurPhoto(swiper.activeIndex)}}
                    >
                        <ChangeSlide position={curPhoto}/>
                        {photos.photos?.map((photoImage) => {
                            return (
                                <SwiperSlide key={photoImage.id} className='slide'>
                                    <PhotoView src={photoImage.imageUrl}>
                                        <div className='image'>
                                            <img src={photoImage.imageUrl}/>
                                        </div>
                                    </PhotoView>
                                </SwiperSlide>
                            )
                        })}
                </SwiperComponent>
            </PhotoProvider>
            <DownloadButton name={photos.name} title={buttonLabel} link={photos.url}/>
        </div>
    )
}

export default PhotosCard

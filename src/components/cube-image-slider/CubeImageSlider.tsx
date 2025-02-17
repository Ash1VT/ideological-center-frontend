import React from 'react'
import { Autoplay, EffectCards, EffectCube, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { CubeImageSliderProps } from './CubeImageSlider.props';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './CubeImageSlider.scss'

const CubeImageSlider = ({images, onSlideSelected} : CubeImageSliderProps) => {
    return (
        <div>
            <Swiper
                effect='cube'
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 10,
                    shadowScale: 0.94,
                  }}
                modules={[Navigation, Pagination, EffectCube, Autoplay]}
                autoplay={{
                    delay: 180000,
                    disableOnInteraction: false
                }}
                navigation
                pagination={{
                    clickable: false
                }}
                loop
                slidesPerView={1}
                onSlideChange={(swiper: SwiperClass) => onSlideSelected(images[swiper.realIndex].id)}
                className='cube__image__swiper'
                >
                    {
                        images.map((image) => {
                            return (
                                <SwiperSlide key={image.id} className='cube__image__swiper__slide'>
                                    <img className='cube__image' src={image.imageUrl}></img>
                                </SwiperSlide>
                            )
                        })

                    }
            </Swiper>
        </div>
    )
}

export default CubeImageSlider

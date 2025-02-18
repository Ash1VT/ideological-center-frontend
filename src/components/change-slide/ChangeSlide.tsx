import { useEffect } from "react"
import { useSwiper } from "swiper/react"

const ChangeSlide = ({ position }: {position: number}) => {
    const swiper = useSwiper()

    useEffect(() => {
       if (swiper) {
          swiper.slideTo(position)
       }
    }, [swiper, position])
    return null
}

export default ChangeSlide
export type CarouselSliderItem = {
    image?: string
    title: string
    description?: string
}

export type CarouselSliderProps = {
    items: CarouselSliderItem[]
}
export type ImageSliderModel = {
    id: number
    imageUrl?: string
}

export type CubeImageSliderProps = {
    images: ImageSliderModel[]
    onSlideSelected: (id: number) => void
}
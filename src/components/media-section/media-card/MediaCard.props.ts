import { MediaModel } from "src/redux/models/media"

export type MediaCardProps = {
    media: MediaModel
    onMediaClick: (id: number) => void
}
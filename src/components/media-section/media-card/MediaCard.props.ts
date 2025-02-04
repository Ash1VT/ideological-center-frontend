import { MediaModel } from "src/models/media"

export type MediaCardProps = {
    media: MediaModel
    onMediaClick: (id: number) => void
}
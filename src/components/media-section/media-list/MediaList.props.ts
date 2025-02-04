import { MediaModel } from "src/models/media"

export type MediaListProps = {
    media: MediaModel[]
    onMediaClick: (id: number) => void
}
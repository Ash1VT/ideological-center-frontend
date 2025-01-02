import { MediaModel } from "src/redux/models/media"

export type MediaListProps = {
    media: MediaModel[]
    onMediaClick: (id: number) => void
}
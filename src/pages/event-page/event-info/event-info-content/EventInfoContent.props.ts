export type EventInfoContentItem = {
    id: number,
    text?: string,
    image?: string
}

export type EventInfoContentProps = {
    items: EventInfoContentItem[]
    activeItem: number
}
export type EventInfoMenuItem = {
    id: number,
    name: string
}

export type EventInfoMenuProps = {
    items: EventInfoMenuItem[],
    activeItem: number,
    onItemSelected: (id: number) => void
}
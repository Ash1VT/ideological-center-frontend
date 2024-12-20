export type EventsMenuItem = {
    id: number
    label: string
}


export type EventsMenuProps = {
    items: EventsMenuItem[]
    selectedItem: number
    onItemSelected: (index: number) => void
}
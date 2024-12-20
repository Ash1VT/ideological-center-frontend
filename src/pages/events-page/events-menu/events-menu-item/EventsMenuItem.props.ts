export type EventsMenuItem = {
    id: number
    label: string
}


export type EventsMenuItemProps = {
    item: EventsMenuItem
    selectedItem: number
    onItemSelected: (index: number) => void
}
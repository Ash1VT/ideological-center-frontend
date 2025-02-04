export type MediaSearchProps = {
    searchValue: string
    onMediaSearch: (value: string) => Promise<void>
}
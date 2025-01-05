export interface MuseumHallModel {
    id: number
    name: string
    description: string
    imageUrl: string
    sections: MuseumSectionModel[]
}

export interface MuseumSectionModel {
    id: number
    name: string
    description: string
    imageUrl: string
    museumHallId: number
}
export type EventModel = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    location: string;
    startDate: string;
    endDate: string;
}

export type EventCardProps = {
    event: EventModel
}
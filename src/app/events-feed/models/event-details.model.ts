export interface Event{
    id;
    ownerUsername: string;
    title: string;
    description: string;
    shortDescription: string;
    coverImage: string;
    location: string;
    city: string;
    lng: number
    lat: number;
    date: Date;
    startTime: string;
    endTime: string;
    threshold: number;
    maximum: number;
}
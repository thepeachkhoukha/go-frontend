export interface EventSaveRequest{
    ownerUsername: string;
    title: string;
    location: string;
    city: string;
    description: string;
    shortDescription: string;
    coverImage: string;
    date: Date
    startTime: string;
    endTime: string;
    threshold: number;
    maximum: number;
}
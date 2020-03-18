import { Event } from 'src/app/events-feed/models/event-details.model';

export interface UserDetails{
    id: number;
    username: string;
    name: string;
    location: string;
    university: string;
    occupation: string;
    lat: number;
    lng: number;
    image: string;
}

export interface UserInfo{
    userDetails: UserDetails;
    events: Event[];
    myEvents: Event[];
}
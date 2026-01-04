export interface UserInfo {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    company: string;
}

export interface EventDetails {
    eventType: string;
    date: string;
    time: string;
    location: string;
    guests: number;
    duration: number;
    specialRequests: string;
}

export interface Package {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    maxGuests: number;
    image: string;
}

export type EventType = 'Cumpleaños' | 'Boda' | 'Aniversario' | 'Baby Shower' | 'Graduación' | 'Corporativo' | 'Quinceañera' | 'Bautizo' | 'Otro';

export interface Step {
    id: number;
    title: string;
    icon: React.ElementType;
}

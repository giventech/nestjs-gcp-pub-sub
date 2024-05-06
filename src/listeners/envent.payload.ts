export interface EventPayload {
    eventName: string;
    eventDate: Date;
    eventLocation: string;
    eventDescription?: string;
    eventOrganizer: string;
    eventParticipants: string[];
  }
  
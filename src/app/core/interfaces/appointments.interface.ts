export interface AppointmentCreate {
    service: string;
    professional: string;
    date: string;
    clientName: string;
    clientNumber: string;
    clientEmail: string;
    clientComment: string;
}

export interface AppointmentCreateResponse {
    successful: boolean;
    msg: {
        title: string;
        description: string;
    }
    body: {
        service: string;
        professional: string;
        date: string;
        clientName: string;
        clientNumber: number;
        clientEmail: string;
        clientComment: string;
        state: string;
        _id: string;
    }
}
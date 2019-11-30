export interface WorkoutRequest {
    dateTime: Date;
    location: string;
    type: string;
    joinLimit: number;
    visible: boolean;
}
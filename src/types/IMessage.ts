export interface IMessage {
    id: number;
    subject: string;
    message: string;
    received: string;
    isRead: boolean;
    isArchived: boolean;
}
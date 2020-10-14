import {IMessage} from "../types/IMessage";

export const MockMessage: IMessage = {
    id: 1,
    isRead: false,
    message: "testmessage",
    received: "01/01/2020",
    subject: "testsubject",
    isArchived: false
}
export const MockMessageRead: IMessage = {
    ...MockMessage,
    isRead: true
}
export const MockMessageArchived: IMessage = {
    ...MockMessage,
    isArchived: true
}
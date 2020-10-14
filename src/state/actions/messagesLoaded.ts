import {actionIds, BaseAction} from "../common";
import {IMessagesJSON} from "../../types/IMessagesJSON";

const messagesLoaded: (data: IMessagesJSON) =>
    BaseAction = (data) => ({
    type: actionIds.MESSAGES_LOADED,
    payload: data,
});

export default messagesLoaded;
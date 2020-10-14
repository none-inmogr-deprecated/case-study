import {actionIds, BaseAction} from "../common";

const messagesLoad: () =>
    BaseAction = () => ({
    type: actionIds.LOAD_MESSAGES,
    payload: {},
});

export default messagesLoad;
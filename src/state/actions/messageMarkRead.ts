import {actionIds, BaseAction} from "../common";

const messageMarkRead: (id: number) =>
    BaseAction = (id) => ({
    type: actionIds.MESSAGE_MARK_READ,
    payload: {
        id
    },
});

export default messageMarkRead;
import {actionIds, BaseAction} from "../common";

const messageArchive: (id: number) =>
    BaseAction = (id) => ({
    type: actionIds.MESSAGE_ARCHIVE,
    payload: {
        id
    },
});

export default messageArchive;
import {actionIds, BaseAction} from "../common";

const messageSelected: (id: number) =>
    BaseAction = (id) => ({
    type: actionIds.MESSAGE_SELECTED,
    payload: {
        id
    },
});

export default messageSelected;
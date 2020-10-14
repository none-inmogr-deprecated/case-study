import {actionIds, BaseAction} from "../common";

const messageSelect: (id: number) =>
    BaseAction = (id) => ({
    type: actionIds.SELECT_MESSAGE,
    payload: {
        id
    },
});

export default messageSelect;
import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {actionIds, BaseAction} from "../common";
import messageSelected from "../actions/messageSelected";
import axios from 'axios';
import messagesLoaded from "../actions/messagesLoaded";

const rootSaga = function* root(params: any) {
    yield all([
        fork(watchSelectMessage, params),
        fork(watchLoadMessages, params),
    ])
};

function* watchSelectMessage(params: any) {
    yield takeLatest(actionIds.SELECT_MESSAGE, (action: BaseAction) => {
        params.dispatch(messageSelected(action.payload.id))
    });
}

function* watchLoadMessages(params: any) {
    yield takeEvery(actionIds.LOAD_MESSAGES, fetchMessages);
}

function* fetchMessages() {
    try {
        const data = yield call(axios.get, 'http://localhost:3000/messages.json');
        yield put(messagesLoaded(data.data.messages))
    } catch (e) {
        console.error(e);
    }
}

export default rootSaga;
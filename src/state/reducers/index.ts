import { combineReducers } from 'redux';
import IRootState from "../../types/IRootState";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers<IRootState>({
    messages: messageReducer
});

export default rootReducer;